import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const openaiHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
};

async function generateContent(topic: string) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo-0125",
        messages: [
          {
            response_format: {
              type: "json_object",
            },
            role: "user",
            content: `generate article content on topic ${topic} and give me response in this format:\n{\n"mainTitle",\n"mainSubtitle"\n"introName",\n"introContent"\n"chapterOneName",\n"chapterOneContent",\n"chapterTwoName",\n"chapterTwoContent",\n"chapterThreeName",\n"chapterThreeContent",\n"chapterFourName"\n"chapterFourContent",\n"conclusionName",\n"conclusionContent"\n}`,
          },
        ],
      },
      { headers: openaiHeaders }
    );

    return JSON.parse(response.data.choices[0].message?.content.trim() || "");
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content");
  }
}

async function generateImages(
  model: string,
  prompt: string,
  n: number,
  size: string
) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model,
        prompt,
        n,
        size,
      },
      { headers: openaiHeaders }
    );

    return response.data.data.map((item: { url: string }) => item.url);
  } catch (error) {
    console.error("Error generating images:", error);
    throw new Error("Failed to generate images");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { topic } = req.body;
  if (!topic) {
    res.status(400).json({ error: "Topic is required" });
    return;
  }

  try {
    const textContent = await generateContent(topic);

    const articleImages = await generateImages(
      "dall-e-2",
      `generate 4 images for my article on topic ${topic}`,
      4,
      "256x256"
    );

    const landingPageImage = await generateImages(
      "dall-e-3",
      `generate a minimal background image for landing page of my article on topic ${topic}`,
      1,
      "1792x1024"
    );

    const finalDataObj = {
      ...textContent,
      bgImagePath: landingPageImage[0],
      chapterFourImage: articleImages[0],
      chapterThreeImage: articleImages[1],
      chapterTwoImage: articleImages[2],
      chapterOneImage: articleImages[3],
    };
    // console.log(
    //   "==================================================",
    //   finalDataObj
    // );
    res.status(200).json({ content: finalDataObj });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
