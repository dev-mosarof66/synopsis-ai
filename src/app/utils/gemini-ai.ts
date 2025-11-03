
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!
});

export const GeminiAI = async (prompt: File) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Summarize the content of this PDF file: ${prompt.name}
            - provide the title of the document as title.
            -provide an array of concise  summary highlighting the key points and main ideas presented in each page.
            - create an array of summary with key points as title and main ideas as description.
            - as plain text, without markdown or any other formatting.
            `,
        });
        return response.text;
    } catch (error) {
        console.log('error while generating content : ', error)
    }
}