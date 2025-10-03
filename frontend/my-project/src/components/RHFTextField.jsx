
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
      className="text-[15px]"
    >
      <label htmlFor={name} className="mb-2 block text-secondary-600">
        {label}
        {isRequired && <span className="text-red-600">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input ${hasError ? "border-red-600" : ""}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <small className="text-red-600 mt-2">
          {errors[name]?.message}
        </small>
      )}
    </div>
  );
};
