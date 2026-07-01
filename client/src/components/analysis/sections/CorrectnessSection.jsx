import Card from "../../common/Card";
import SectionHeader from "../../common/SectionHeader";

const CorrectnessSection = ({ correctness }) => {
  return (
    <Card>
      <SectionHeader title="✅ Correctness" />

      <div
        className={`alert ${
          correctness.isCorrect
            ? "alert-success"
            : "alert-danger"
        } mb-3`}
      >
        <strong>
          {correctness.isCorrect
            ? "Correct Solution"
            : "Needs Improvement"}
        </strong>
      </div>

      <p className="mb-0">
        {correctness.explanation}
      </p>
    </Card>
  );
};

export default CorrectnessSection;