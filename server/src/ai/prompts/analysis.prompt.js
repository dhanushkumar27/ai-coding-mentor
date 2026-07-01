const { buildPrompt } = require("./builders/analysis.builder");

const buildAnalysisPrompt = ({ input, language }) => {
  return buildPrompt({
    input,
    language,
  });
};

module.exports = {
  buildAnalysisPrompt,
};