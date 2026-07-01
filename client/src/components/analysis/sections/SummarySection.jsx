import Card from "../../common/Card";
import SectionHeader from "../../common/SectionHeader";

const SummarySection = ({ summary }) => {
  return (
    <Card>
      <SectionHeader title="📋 Summary" />

      <p className="mb-0">
        {summary}
      </p>
    </Card>
  );
};

export default SummarySection;