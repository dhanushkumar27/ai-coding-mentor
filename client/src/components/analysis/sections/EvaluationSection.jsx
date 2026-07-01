import Card from "../../common/Card";
import SectionHeader from "../../common/SectionHeader";

const EvaluationSection = ({ analysis }) => {
  return (
    <Card>
      <SectionHeader title="✅ Evaluation" />

      <div className="mb-4">
        <h5>
          {analysis.correctness.isCorrect ? "✅ Correct" : "❌ Incorrect"}
        </h5>

        <p>{analysis.correctness.explanation}</p>
      </div>

      <div className="row">

        <div className="col-md-6">
          <div className="border rounded p-3 h-100">
            <h6>⚡ Time Complexity</h6>

            <h4>{analysis.complexity.time.value || "N/A"}</h4>

            <p className="mb-0">
              {analysis.complexity.time.explanation}
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 h-100">
            <h6>💾 Space Complexity</h6>

            <h4>{analysis.complexity.space.value || "N/A"}</h4>

            <p className="mb-0">
              {analysis.complexity.space.explanation}
            </p>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default EvaluationSection;