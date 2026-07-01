function validateAnalysisResponse(response) {
  if (!response) {
    throw new Error("AI response is empty.");
  }

  const requiredSections = [
  "analysis",
  "learning",
  "metadata",
];

for (const section of requiredSections) {
  if (!response[section]) {
    throw new Error(`Missing ${section} section.`);
  }
}

  return response;
}

module.exports = {
  validateAnalysisResponse,
};