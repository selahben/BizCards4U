export function Input({ label, name, error, ...rest }) {
  return (
    <div className="form-group my-3">
      <label htmlFor={name} className="text-start">
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <input
        {...rest}
        name={name}
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <span className="invalid-feedback">{error}</span>
    </div>
  );
}
