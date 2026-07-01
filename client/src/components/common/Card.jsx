const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`card shadow-sm mb-4 ${className}`}
    >
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;