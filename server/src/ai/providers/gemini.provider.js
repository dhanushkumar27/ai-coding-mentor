const { GoogleGenAI } = require("@google/genai");
const {AI_CONSTANTS} = require("../constants/ai.constants")


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const generateContent = async ({
  prompt,
  temperature = AI_CONSTANTS.DEFAULT_TEMPERATURE,
  maxTokens = AI_CONSTANTS.DEFAULT_TEMPERATURE,
}) => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: {
        temperature,
        maxOutputTokens: maxTokens,
      },
    });

    if (!response.text) {
      throw new Error("Gemini returned an empty response.");
    }

    return response.text;
  } catch (error) {
    throw new Error(`Failed to generate AI response: ${error.message}`);
  }
};

module.exports = {
  generateContent,
};