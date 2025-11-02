
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!
});

export const GeminiAI = async (prompt: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.log('error while generating content : ', error)
    }
}