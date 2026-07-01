import SummarySection from "./sections/SummarySection";
import EvaluationSection from "./sections/EvaluationSection";
import OptimizedCodeSection from "./sections/OptimizedCodeSection";

const AnalysisSections = ({ analysis }) => {
  return (
    <>
      <SummarySection
        summary={analysis.summary}
      />

      <EvaluationSection
        analysis={analysis}
      />

      <OptimizedCodeSection
        code={analysis.optimizedCode}
      />
    </>
  );
};

export default AnalysisSections;