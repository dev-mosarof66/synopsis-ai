import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"

export const convertPDFToText = async (pdfUrl: string) => {
    try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
            throw new Error(`Failed to download PDF: ${response.statusText}`);
        }
        const blob = await response.blob();

        const blobBuffer = await blob.arrayBuffer();

        const loader = new PDFLoader(new Blob([blobBuffer], { type: 'application/pdf' }));
        const docs = await loader.load();

        return docs.map(doc => doc.pageContent).join('\n');
    } catch (error) {
        console.log('error while converting pdf to text : ', error);
        throw new Error('Could not convert PDF to text');
    }
}

export const jsonParser = (response: string) => {
    try {
        return response
            .replace(/```json/g, "") 
            .replace(/```/g, "")    
            .trim();
    } catch (error) {
        console.log('error while parsing json : ', error);
        throw new Error('Could not parse JSON response');
    }
}