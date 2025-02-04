import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config();

export const model = new ChatGoogleGenerativeAI({
    model: "gemini-pro",
    temperature: 0.7,
    apiKey: process.env.GEMINI_API_KEY
});
