import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export const FileInput = (props) => {
  const {
    label,
    name,
    value,
    dir = "rtl",
    onChange,
    className,
    errors,
  } = props;

  return (
    <div className="bg-white my-2 border rounded-[7px] text-primary-900 border-primary-900">
      <label
        htmlFor="file-upload"
        className={`w-full h-10 flex-center gap-1.5 cursor-pointer ${className}`}
      >
        <span>{label}</span>
        <ArrowUpTrayIcon className="w-5" />
      </label>
      <input
        type="file"
        id="file-upload"
        className="hidden"
        name={name}
        value={value}
        dir={dir}
        onChange={onChange}
      />
      {errors && errors[name] && (
        <small className="text-red-600 mt-2">{errors[name]?.message}</small>
      )}
    </div>
  );
};
