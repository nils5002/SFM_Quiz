import { questions } from "../data";

export default function Result({ correctUnswers }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Your result is: {correctUnswers} from {questions.length} questions
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}
