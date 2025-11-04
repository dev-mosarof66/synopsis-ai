
import { jsonParser } from "@/lib/langchain";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!
});

export const GeminiAI = async (prompt: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Summarize the content of this PDF file: ${prompt}
            - provide the title of the document as title.
            - provide an array of concise  summary highlighting the key points and main ideas presented in each page.
            - create an array of summary with key points as title and main ideas as description
            - the expected response format is as follows:
            {
                "title": "title of the document",
                "summaries": [
                    {
                        "title": "title of page 1",
                        "description": ["main idea 1"]
                    },
                    {
                        "title": "title of page 2",
                        "description": ["main idea 1"]
                    }
                ]
            }
            `,
        });
    
        if (!response?.text) {
            throw new Error('No response from Gemini AI');
        }
        const raw = jsonParser(response.text);
        let parsed;
        try {
            parsed = JSON.parse(raw); 
            if (typeof parsed === "string") {
                parsed = JSON.parse(parsed); 
            }
        } catch (err) {
            console.error("❌ Failed to parse JSON:", err);
        }

        return parsed;
    } catch (error) {
        console.log('error while generating content : ', error)
    }
}