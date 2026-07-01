const normalizeAnalysisResponse = (response = {}) => {
  const analysis = response.analysis ?? {};
  const learning = response.learning ?? {};
  const metadata = response.metadata ?? {};

  return {
    analysis: {
      summary: analysis.summary ?? "",

      correctness: {
        isCorrect: analysis.correctness?.isCorrect ?? false,
        explanation: analysis.correctness?.explanation ?? "",
      },

      optimizedCode: analysis.optimizedCode ?? "",

      complexity: {
        time: {
          value: analysis.complexity?.time?.value ?? "",
          explanation: analysis.complexity?.time?.explanation ?? "",
        },
        space: {
          value: analysis.complexity?.space?.value ?? "",
          explanation: analysis.complexity?.space?.explanation ?? "",
        },
      },

      bugs: {
        count: analysis.bugs?.items?.length ?? 0,
        items: analysis.bugs?.items ?? [],
      },

      codeSmells: {
        count: analysis.codeSmells?.items?.length ?? 0,
        items: analysis.codeSmells?.items ?? [],
      },

      bestPractices: {
        count: analysis.bestPractices?.items?.length ?? 0,
        items: analysis.bestPractices?.items ?? [],
      },

      suggestions: {
        count: analysis.suggestions?.items?.length ?? 0,
        items: analysis.suggestions?.items ?? [],
      },
    },

    learning: {
      currentLevel: learning.currentLevel ?? "",

      problemSuitability: {
        status: learning.problemSuitability?.status ?? "",
        reason: learning.problemSuitability?.reason ?? "",
      },

      prerequisites: {
        completed: learning.prerequisites?.completed ?? [],
        missing: learning.prerequisites?.missing ?? [],
      },

      revision: {
        topics: learning.revision?.topics ?? [],
        priority: learning.revision?.priority ?? "",
      },

      roadmap: {
        previousTopic: learning.roadmap?.previousTopic ?? "",
        currentTopic: learning.roadmap?.currentTopic ?? "",
        nextTopic: learning.roadmap?.nextTopic ?? "",
        futureTopics: learning.roadmap?.futureTopics ?? [],
      },

      recommendedProblems: {
        count: learning.recommendedProblems?.items?.length ?? 0,
        items: learning.recommendedProblems?.items ?? [],
      },

      interviewQuestions: {
        count: learning.interviewQuestions?.items?.length ?? 0,
        items: learning.interviewQuestions?.items ?? [],
      },

      readiness: {
        score: learning.readiness?.score ?? 0,
        reason: learning.readiness?.reason ?? "",
        missingSkills: learning.readiness?.missingSkills ?? [],
      },

      nextStep: learning.nextStep ?? "",
    },

    metadata: {
      analysisConfidence: metadata.analysisConfidence ?? 0,
      language: metadata.language ?? "",
      analysisVersion: metadata.analysisVersion ?? "1.0.0",
    },
  };
};

module.exports = {
  normalizeAnalysisResponse,
};