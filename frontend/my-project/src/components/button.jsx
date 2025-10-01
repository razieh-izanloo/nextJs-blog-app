
export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn--${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
