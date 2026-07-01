const LANGUAGES = [
  "Java",
  "JavaScript",
  "Python",
  "C++",
  "C",
  "C#",
  "Go",
  "Rust",
  "TypeScript",
  "SQL",
  "Text",
];

const LanguageSelector = ({ language, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">
        Programming Language
      </label>

      <select
        className="form-select"
        value={language}
        onChange={(e) => onChange(e.target.value)}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;