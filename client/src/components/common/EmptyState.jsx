const EmptyState = ({ title, description }) => {
  return (
    <div className="text-center py-5">
      <h4>{title}</h4>

      <p className="text-muted">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;