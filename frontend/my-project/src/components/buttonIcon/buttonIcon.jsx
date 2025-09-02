import "./buttonIcon.scss";

export const ButtonIcon = ({
  children,
  onClick,
  className,
  variant,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        btnType-${[variant]}
        ${className} btn-icon`}
      {...rest}
    >
      {children}
    </button>
  );
};
