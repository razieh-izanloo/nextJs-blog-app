"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="container">
      <div className="d-flex align-justify-center pt-4">
        <div>
          <p className="fs-5 font-bold text-danger mb-4">{error.message}</p>
          <button
            onClick={reset}
            className="d-flex align-items-center gap-2 text-secondary"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    </div>
  );
};
export default Error;
