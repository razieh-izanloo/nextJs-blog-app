import "./spinner.css";

export const Spinner = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="lds-roller">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};
