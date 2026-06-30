const buildAnalysisPrompt = ({ input, language }) => `
You are an expert software engineer.

Analyze the following ${language} code.

Return ONLY valid JSON.

{
  "optimizedCode":"",
  "notes":"",
  "suggestions":[
    {
      "heading":"",
      "content":""
    }
  ]
}

Code:

${input}
`;

module.exports = {
  buildAnalysisPrompt,
};