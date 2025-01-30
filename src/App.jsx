import "./index.scss";
import Game from "./components/Game";
import Result from "./components/Result";
import { questions } from "./data";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [correctUnswers, setCorrectUnswers] = useState(0);
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          setStep={setStep}
          correctUnswers={correctUnswers}
          setCorrectUnswers={setCorrectUnswers}
        />
      ) : (
        <Result correctUnswers={correctUnswers} />
      )}
    </div>
  );
}
