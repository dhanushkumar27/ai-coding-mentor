import Card from "../../common/Card";
import SectionHeader from "../../common/SectionHeader";

const OptimizedCodeSection = ({ code }) => {
  if (!code) return null;

  return (
    <Card>
      <SectionHeader title="💻 Optimized Solution" />

      <pre
        className="bg-dark text-light p-3 rounded"
        style={{
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </Card>
  );
};

export default OptimizedCodeSection;