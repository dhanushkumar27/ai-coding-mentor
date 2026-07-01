import Card from "../../common/Card";
import SectionHeader from "../../common/SectionHeader";

const ComplexitySection = ({ complexity }) => {
  return (
    <Card>
      <SectionHeader title="⚡ Complexity Analysis" />

      <div className="row">

        <div className="col-md-6 mb-3">
          <h6 className="fw-bold text-primary">
            Time Complexity
          </h6>

          <p className="fw-semibold">
            {complexity.time.value || "N/A"}
          </p>

          <small className="text-muted">
            {complexity.time.explanation}
          </small>
        </div>

        <div className="col-md-6">
          <h6 className="fw-bold text-success">
            Space Complexity
          </h6>

          <p className="fw-semibold">
            {complexity.space.value || "N/A"}
          </p>

          <small className="text-muted">
            {complexity.space.explanation}
          </small>
        </div>

      </div>
    </Card>
  );
};

export default ComplexitySection;