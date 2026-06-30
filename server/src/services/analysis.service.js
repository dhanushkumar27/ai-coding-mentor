const { generateContent } = require("../ai/providers/gemini.provider");
const { parseAnalysis } = require("../ai/parsers/analysis.parser");

const {
  buildAnalysisPrompt,
} = require("../ai/prompts/analysis.prompt");

const analyzeCode = async ({ input, language }) => {
  const prompt = buildAnalysisPrompt({
    input,
    language,
  });
  


  const response = await generateContent(prompt);

    return parseAnalysis(response);
};

module.exports = {
  analyzeCode,
};