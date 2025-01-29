import { questions } from "../data";
import { useState } from "react";

export default function Game() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickWtf = (index) =>{
    console.log(step, index);
  }
  return (
    <>
      <div className="progress">
        <div style={{ width: "50%" }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
            
          <li key={text} onClick={()=> onClickWtf(index)}>
            {text}
            </li>
        ))}
      </ul>
    </>
  );
}
