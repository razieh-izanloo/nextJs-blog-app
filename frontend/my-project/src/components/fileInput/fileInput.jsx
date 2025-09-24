import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import "./fileInput.scss";

export const FileInput = (props) => {
  const { label, name, value, dir = "rtl", onChange, className, errors } = props;

  return (
    <div className="file-upload">
      <label htmlFor="file-upload" className={className}>
        <span>{label}</span>
        <ArrowUpTrayIcon id="arrow-icon" />
      </label>
      <input
        type="file"
        id="file-upload"
        className="d-none"
        name={name}
        value={value}
        dir={dir}
        onChange={onChange}
      />
        {errors && errors[name] && (
        <small className="text-danger mt-2">
          {errors[name]?.message}
        </small>
      )}
    </div>
  );
};
