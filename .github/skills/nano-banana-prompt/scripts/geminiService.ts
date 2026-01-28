
import { GoogleGenAI, Type } from "@google/genai";
import { ReferenceImage, GenerationResult, AspectRatio, ImageSize } from "../types";

export class GeminiService {
  // Always create a new GoogleGenAI instance right before making an API call to ensure it uses the most up-to-date API key.
  
  async analyzeAndGeneratePrompts(
    images: ReferenceImage[],
    topic: string,
    targetFormats: string[]
  ): Promise<GenerationResult> {
    // API key is obtained exclusively from process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const modelName = 'gemini-3-pro-preview'; // Complex reasoning model
    
    const imageParts = images.map(img => ({
      inlineData: {
        data: img.base64,
        mimeType: img.mimeType
      }
    }));

    const promptText = `
      Analyze these reference images to extract a consistent brand identity including:
      - Color Palette
      - Visual Style (e.g., 3D render, minimalist, watercolor, photorealistic)
      - Common Elements
      - Emotional Mood

      Then, based on the topic: "${topic}", generate high-fidelity image generation prompts for the Gemini image models.
      
      Requirements for prompts:
      1. They must adhere strictly to the visual style of the reference images.
      2. For each target format listed [${targetFormats.join(', ')}], create a specific prompt.
      3. For a "Blog Jumbo Header", use 16:9.
      4. For a "Thumbnail", use 1:1 or 4:3.
      5. Choose between 'gemini-2.5-flash-image' for standard results or 'gemini-3-pro-image-preview' for high-quality requirements.
      6. If using 'gemini-3-pro-image-preview', specify an imageSize ('1K', '2K', or '4K').
    `;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: {
        parts: [...imageParts, { text: promptText }]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: {
              type: Type.OBJECT,
              properties: {
                colorPalette: { type: Type.ARRAY, items: { type: Type.STRING } },
                visualStyle: { type: Type.STRING },
                commonElements: { type: Type.STRING },
                mood: { type: Type.STRING }
              },
              required: ["colorPalette", "visualStyle", "commonElements", "mood"]
            },
            prompts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  prompt: { type: Type.STRING },
                  aspectRatio: { type: Type.STRING },
                  model: { type: Type.STRING },
                  imageSize: { type: Type.STRING }
                },
                required: ["id", "title", "description", "prompt", "aspectRatio", "model"]
              }
            }
          },
          required: ["analysis", "prompts"]
        }
      }
    });

    // Directly access .text property from GenerateContentResponse (not a method)
    const data = JSON.parse(response.text || '{}') as GenerationResult;
    return data;
  }

  async generatePreview(prompt: string, aspectRatio: AspectRatio, model: string, imageSize?: ImageSize): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const config: any = {
      imageConfig: {
        aspectRatio: aspectRatio
      }
    };

    // imageSize is only supported for gemini-3-pro-image-preview
    if (model === 'gemini-3-pro-image-preview' && imageSize) {
      config.imageConfig.imageSize = imageSize;
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts: [{ text: prompt }] },
      config
    });

    // Iterate through all parts to find the image part as it may not be the first part
    for (const candidate of response.candidates || []) {
      for (const part of candidate.content.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    throw new Error("No image data found in response");
  }
}

export const geminiService = new GeminiService();
