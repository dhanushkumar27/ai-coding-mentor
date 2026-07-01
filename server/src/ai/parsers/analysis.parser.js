const { sanitizeResponse } = require("../sanitizers/response.sanitizer");

const parseAnalysisResponse = (response) => {
  try {
    const cleaned = sanitizeResponse(response);

    return JSON.parse(cleaned);
  } catch (error) {
    throw new Error("Failed to parse AI response.");
  }
};

module.exports = {
  parseAnalysisResponse,
};