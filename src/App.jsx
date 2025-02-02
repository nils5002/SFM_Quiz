import "./index.scss";
import Game from "./components/Game";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [correctUnswers, setCorrectUnswers] = useState(0);

  return (
    <div className="App">
      <Game
        step={step}
        setStep={setStep}
        correctUnswers={correctUnswers}
        setCorrectUnswers={setCorrectUnswers}
      />
    </div>
  );
}
