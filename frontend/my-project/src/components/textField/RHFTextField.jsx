import "./RHFTextField.scss";

export const RHFTextField = ({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  ...rest
}) => {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className="textField"
    >
      <label htmlFor={name} className="mb-2 d-block">
        {label}
        {isRequired && <span className="text-danger">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input ${hasError ? "textField--invalid" : ""}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <small className="text-danger mt-2">
          {errors[name]?.message}
        </small>
      )}
    </div>
  );
};
