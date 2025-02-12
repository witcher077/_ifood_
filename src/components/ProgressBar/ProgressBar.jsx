import "./ProgressBar.css"

const ProgressBar = ({ step, setStep }) => {
  const gotStep = (val) => {
    setStep(val);
  };

  return (
    <div
      className={`progressBar mt-3 mx-10 ${step == 0 ? "first" : step == 1 ? "second" : step == 2 ? "third" : step == 3 ? "full" : ""
        }`}
    >
      <div
        onClick={() => {
          gotStep(0);
        }}
        className="steps"
      >
        1
      </div>
      <div
        onClick={() => {
          gotStep(1);
        }}
        className="steps"
      >
        2
      </div>
      <div
        onClick={() => {
          gotStep(2);
        }}
        className="steps"
      >
        3
      </div>

      <div
        onClick={() => {
          gotStep(3);
        }}
        className="steps"
      >
        4
      </div>
    </div>
  );
};

export default ProgressBar;
