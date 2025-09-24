export const RHFSelect = ({ label, name, register, options, required }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-4 d-block text-secondary">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
