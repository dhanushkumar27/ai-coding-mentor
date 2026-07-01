const ROLE = require("../shared/role.prompt");
const RULES = require("../shared/rules.prompt");
const OUTPUT_SCHEMA = require("../shared/outputSchema.prompt");

const ANALYSIS_SECTION = require("../sections/analysis.section");
const LEARNING_SECTION = require("../sections/learning.section");
const METADATA_SECTION = require("../sections/metadata.section");

const buildPrompt = ({ language, input }) => `
${ROLE}

${RULES}

${ANALYSIS_SECTION}

${LEARNING_SECTION}

${METADATA_SECTION}

${OUTPUT_SCHEMA}

Programming Language:
${language}

User Input:
${input}
`;

module.exports = {
  buildPrompt,
};