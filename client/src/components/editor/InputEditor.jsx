const InputEditor = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">
        Paste your code, error, problem or concept
      </label>

      <textarea
        className="form-control"
        rows={18}
        placeholder="Paste your code, runtime error, DSA problem or concept here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputEditor;