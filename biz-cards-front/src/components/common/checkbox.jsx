export function Checkbox({ label, name, error, ...rest }) {
  return (
    <div className="form-group form-check my-3">
      <input
        {...rest}
        name={name}
        className={["form-control", "form-check-input", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
        style={{ padding: "1px" }}
      />
      <label htmlFor={name} className="text-start form-check-label ms-1">
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <span className="invalid-feedback">{error}</span>
    </div>
  );
}
