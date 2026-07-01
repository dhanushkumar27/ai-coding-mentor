import AnalysisSections from "./AnalysisSections";
import EmptyState from "../common/EmptyState";

const AnalysisPanel = ({ analysisResult, loading, error }) => {
  if (loading) {
    return <h4>Analyzing...</h4>;
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        {error}
      </div>
    );
  }

  if (!analysisResult) {
    return (
      <EmptyState
        title="AI Analysis"
        description="Submit your code or question to see the analysis."
      />
    );
  }

  const analysis = analysisResult.data.analysis;

  return (
    <AnalysisSections
      analysis={analysis}
    />
  );
};

export default AnalysisPanel;