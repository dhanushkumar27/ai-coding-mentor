const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const model = "gemini-2.5-flash";

const generateContent = async (prompt) => {
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  generateContent,
};