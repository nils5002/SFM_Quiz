import { useState } from "react";
import { questions } from "../data";

export default function Game({
  step,
  setStep,
  correctUnswers,
  setCorrectUnswers,
}) {
  const [isShow, showStart] = useState(true);

  const question = questions[step];

  console.log(step + " fddf " + questions.length);
  const percentageBar = Math.round((step / (questions.length - 1)) * 100);

  const onClickOption = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrectUnswers(correctUnswers + 1);
    }
    console.log(correctUnswers);
  };

  return (
    <>
      {isShow ? (
        <div className="start">
          <h1>React Quiz</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="react-logo"
          />
          <button onClick={()=>{showStart(false)}}>Start</button>
        </div>
      ) : (
        <>
          <div className="progress">
            <div
              style={{ width: `${percentageBar}%` }}
              className="progress__inner"
            ></div>
          </div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li key={text} onClick={() => onClickOption(index)}>
                {text}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
