import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

async function generateContent(openaiHeaders: any, topic: string) {
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
            content: `generate article content on topic ${topic}, each content/description must have around 500 characters and give me response in this format: {
              "mainTitle",
              "mainSubtitle",
              "introName",
              "introContent",
              "chapterOneName",
              "chapterOneContent",
              "chapterTwoName",
              "chapterTwoContent",
              "chapterThreeName",
              "chapterThreeContent",
              "chapterFourName",
              "chapterFourContent",
              "conclusionName",
              "conclusionContent"
            }`,
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
  openaiHeaders: any,
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

  const { topic, apiKey } = req.body;
  if (!topic || !apiKey) {
    res.status(400).json({ error: "Topic & API Key is required" });
    return;
  }
  const openaiHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    // console.log("=========================================", req.body);
    const textContent = await generateContent(openaiHeaders, topic);
    // console.log("=========================================", textContent);
    const articleImages = await generateImages(
      openaiHeaders,
      "dall-e-2",
      `generate 4 images for my article on topic ${topic}`,
      4,
      "512x512"
    );
    // console.log("=========================================", articleImages);

    const landingPageImage = await generateImages(
      openaiHeaders,
      "dall-e-3",
      `generate a minimal background image for landing page of my article on topic ${topic}`,
      1,
      "1792x1024"
    );
    // console.log("=========================================", landingPageImage);

    const finalDataObj = {
      ...textContent,
      bgImagePath: landingPageImage[0],
      chapterFourImage: articleImages[0],
      chapterThreeImage: articleImages[1],
      chapterTwoImage: articleImages[2],
      chapterOneImage: articleImages[3],
    };
    console.log(
      "==================================================",
      finalDataObj
    );
    res.status(200).json({ content: finalDataObj });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
