import { questions } from "../data";

export default function Game({
  step,
  setStep,
  correctUnswers,
  setCorrectUnswers,
}) {
  const question = questions[step];

  const percentageBar = Math.round((step / questions.length) * 100);

  const onClickOption = (index) => {
    
    setStep(step + 1);
    if (index === question.correct) {
      setCorrectUnswers(correctUnswers + 1);
    }
    console.log(correctUnswers);
  };

  return (
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
  );
}
