const OUTPUT_SCHEMA = `
Return ONLY valid JSON.

Every field below is REQUIRED.

{
  "analysis": {
    "summary": "Explain in 2-4 sentences what the submitted code does.",

    "correctness": {
      "isCorrect": true,
      "explanation": "Explain whether the solution is correct and mention edge cases if needed."
    },

    "optimizedCode": "Provide a cleaner or more efficient implementation if possible.",

    "complexity": {
      "time": {
        "value": "",
        "explanation": ""
      },
      "space": {
        "value": "",
        "explanation": ""
      }
    },

    "bugs": {
      "count": 0,
      "items": []
    },

    "codeSmells": {
      "count": 0,
      "items": []
    },

    "bestPractices": {
      "count": 0,
      "items": []
    },

    "suggestions": {
      "count": 0,
      "items": []
    }
  },

  "learning": {

    "currentLevel": "",

    "problemSuitability": {
      "status": "",
      "reason": ""
    },

    "prerequisites": {
      "completed": [],
      "missing": []
    },

    "revision": {
      "topics": [],
      "priority": ""
    },

    "roadmap": {
      "previousTopic": "",
      "currentTopic": "",
      "nextTopic": "",
      "futureTopics": []
    },

    "recommendedProblems": {
      "count": 0,
      "items": []
    },

    "interviewQuestions": {
      "count": 0,
      "items": []
    },

    "readiness": {
      "score": 0,
      "reason": "",
      "missingSkills": []
    },

    "nextStep": ""
  },

  "metadata": {
    "analysisConfidence": 0,
    "language": "",
    "analysisVersion": "1.0.0"
  }
}
`;

module.exports = OUTPUT_SCHEMA;