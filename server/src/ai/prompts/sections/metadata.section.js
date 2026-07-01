const METADATA_SECTION = `
Return metadata describing the analysis.

Include:

- Detected Input Type
- Programming Language
- Analysis Confidence
- Analysis Version

The confidence score should represent how confident you are in the correctness of the analysis, based on the information provided by the user.

Lower confidence if important information is missing.
`;

module.exports = METADATA_SECTION;