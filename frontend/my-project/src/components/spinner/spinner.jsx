import "./spinner.scss";

export const Spinner = () => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="lds-roller">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};
