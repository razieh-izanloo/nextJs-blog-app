import "./button.scss";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn--${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
