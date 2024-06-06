import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

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
    const response = await openai.createChatCompletion({
      model: "text-embedding-3-small",
      messages: [{ role: "user", content: `Write an article on "${topic}"` }],
      max_tokens: 500,
    });

    const content = response.data.choices[0].message?.content.trim() || "";
    res.status(200).json({ content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
