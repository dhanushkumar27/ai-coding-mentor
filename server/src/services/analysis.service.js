const { buildAnalysisPrompt } = require("../ai/prompts/analysis.prompt");
const { generateContent } = require("../ai/providers/gemini.provider");
const { parseAnalysisResponse } = require("../ai/parsers/analysis.parser");
const { normalizeAnalysisResponse } = require("../ai/normalizers/analysis.normalizer");
const { validateAnalysisResponse } = require("../ai/validators/analysis.validator");
const { sanitizeResponse } = require("../ai/sanitizers/response.sanitizer");

const analyzeCode = async ({ input, language }) => {
  // 1. Build Prompt
  const prompt = buildAnalysisPrompt({ input, language });

  // 2. Generate AI Response
  const rawResponse = await generateContent({
    prompt,
    temperature: 0.2,
    maxTokens: 4096,
  });

  const sanitizedResponse = sanitizeResponse(rawResponse);

  // 3. Parse
  const parsedResponse = parseAnalysisResponse(sanitizedResponse);

  // 4. Normalize
  const normalizedResponse = normalizeAnalysisResponse(parsedResponse);

  // 5. Validate
  const validatedResponse = validateAnalysisResponse(normalizedResponse);

  // 6. Return
  return validatedResponse;
};

module.exports = {
  analyzeCode,
};

