const { analyzeCode } = require("../services/analysis.service");

const analyze = async (req, res) => {
  try {
    const { input, language } = req.body;

    if (!input || !language) {
      return res.status(400).json({
        success: false,
        message: "Input and language are required.",
      });
    }

    const result = await analyzeCode({ input, language });

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  analyze,
};