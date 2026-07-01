import { useState } from "react";

import LanguageSelector from "./LanguageSelector";
import InputEditor from "./InputEditor";
import AnalyzeButton from "./AnalyzeButton";
import analyzeCode from "../../api/analysis.api";

const EditorPanel = ({
  onAnalysisComplete,
  setError,
  setLoading,
}) => {
  const [language, setLanguage] = useState("Java");
  const [input, setInput] = useState("");

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await analyzeCode({
        language,
        input,
      });

      onAnalysisComplete(response);
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LanguageSelector
        language={language}
        onChange={setLanguage}
      />

      <InputEditor
        value={input}
        onChange={setInput}
      />

      <AnalyzeButton onClick={handleAnalyze} />
    </>
  );
};

export default EditorPanel;