import { useState, useEffect } from "react";
import Result from "./Result";

export default function Game({ setCorrectUnswers, correctUnswers }) {
  const [questions, setQuestions] = useState([]);
  const [isShow, showStart] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [step, setStep] = useState(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [loading, setLoading] = useState(true);

  const [newQuestion, setNewQuestion] = useState({
    title: "",
    variants: ["", "", "", ""], // Stellen sicher, dass 4 Varianten vorhanden sind
    correct: null,  // Der Index der richtigen Antwort
  });
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);

  // Ladefragen von der API
  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Fragen:", err);
        setLoading(false);
      });
  }, []);

  const handleAddQuestion = () => {
    console.log(newQuestion); // Überprüfe die Daten, die gesendet werden
    fetch("http://localhost:5000/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then(() => {
        setQuestions([...questions, newQuestion]);
        setNewQuestion({ title: "", variants: ["", "", "", ""], correct: null });
        setIsAddingQuestion(false);
      })
      .catch((err) => {
        console.error("Fehler beim Hinzufügen der Frage:", err);
      });
  };

  if (loading) return <p>Lade Fragen...</p>;
  if (questions.length === 0) return <p>Keine Fragen verfügbar.</p>;

  const question = step !== null ? questions[step] : null;
  const totalQuestions = questions.length;
  const percentageBar = step !== null ? Math.round((step / (totalQuestions - 1)) * 100) : 0;

  const onClickOption = (index) => {
    setSelectedOption(index);
    setCorrectOption(question.correct);

    if (index === question.correct) {
      setCorrectUnswers(correctUnswers + 1);
    }
  };

  const goToNextQuestion = () => {
    setStep(step + 1);
    setSelectedOption(null);
    setCorrectOption(null);
  };

  return (
    <>
      {isShow ? (
        <div className="start">
          <h1>React Quiz</h1>
          <button onClick={() => { setStep(0); showStart(false); }}>Start</button>
          <button onClick={() => setShowAllQuestions(true)}>Alle Fragen anzeigen</button>
          <button onClick={() => setIsAddingQuestion(true)}>Fragen hinzufügen</button>
        </div>
      ) : step !== null && step < totalQuestions ? (
        <>
          <div className="progress">
            <div style={{ width: `${percentageBar}%` }} className="progress__inner"></div>
          </div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li
                key={text}
                onClick={() => onClickOption(index)}
                style={{
                  backgroundColor:
                    selectedOption !== null
                      ? index === correctOption
                        ? "#80E27E"
                        : index === selectedOption
                        ? "rgba(255, 77, 77, 0.7)"
                        : ""
                      : "",
                  color: selectedOption !== null 
                          ? index === correctOption 
                            ? "#003300" 
                            : index === selectedOption 
                              ? "#000" 
                              : "" 
                          : "",
                  fontWeight: 'bold',
                }}
              >
                {text}
                {selectedOption !== null && index === correctOption && (
                  <span> 🎉 (Richtig!)</span>
                )}
                {selectedOption !== null && index === selectedOption && index !== correctOption && (
                  <span> (Falsch!)</span>
                )}
              </li>
            ))}
          </ul>
          {selectedOption !== null && (
            <button onClick={goToNextQuestion}>Nächste Frage</button>
          )}
        </>
      ) : (
        <Result 
          correctUnswers={correctUnswers} 
          totalQuestions={totalQuestions} 
          onRestart={() => {
            setStep(0);
            setCorrectUnswers(0);
            showStart(true);
          }} 
        />
      )}

      {showAllQuestions && (
        <div className="all-questions">
          <h2>Alle Fragen</h2>
          <ul>
            {questions.map((q, index) => (
              <li key={index}>{q.title}</li>
            ))}
          </ul>
          <button onClick={() => setShowAllQuestions(false)}>Zurück</button>
        </div>
      )}

      {isAddingQuestion && (
        <div className="add-question">
          <h2>Neue Frage hinzufügen</h2>
          <input
            type="text"
            placeholder="Frage"
            value={newQuestion.title}
            onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Antwort 1"
            value={newQuestion.variants[0]}
            onChange={(e) => setNewQuestion({ ...newQuestion, variants: [e.target.value, newQuestion.variants[1], newQuestion.variants[2], newQuestion.variants[3]] })}
          />
          <input
            type="text"
            placeholder="Antwort 2"
            value={newQuestion.variants[1]}
            onChange={(e) => setNewQuestion({ ...newQuestion, variants: [newQuestion.variants[0], e.target.value, newQuestion.variants[2], newQuestion.variants[3]] })}
          />
          <input
            type="text"
            placeholder="Antwort 3"
            value={newQuestion.variants[2]}
            onChange={(e) => setNewQuestion({ ...newQuestion, variants: [newQuestion.variants[0], newQuestion.variants[1], e.target.value, newQuestion.variants[3]] })}
          />
          <input
            type="text"
            placeholder="Antwort 4"
            value={newQuestion.variants[3]}
            onChange={(e) => setNewQuestion({ ...newQuestion, variants: [newQuestion.variants[0], newQuestion.variants[1], newQuestion.variants[2], e.target.value] })}
          />
          
          {/* Drop-down für die richtige Antwort */}
          <select
            value={newQuestion.correct !== null ? newQuestion.correct : ""}
            onChange={(e) => {
              const selectedIndex = parseInt(e.target.value); // Den Index aus dem Dropdown lesen (0-3)
              setNewQuestion({ 
                ...newQuestion, 
                correct: selectedIndex // Den 0-basierten Index direkt speichern
              });
            }}
          >
            <option value="" disabled>Wähle die richtige Antwort</option>
            <option value={1}>Antwort 1</option>
            <option value={2}>Antwort 2</option>
            <option value={3}>Antwort 3</option>
            <option value={4}>Antwort 4</option>
          </select>
          
          <button onClick={handleAddQuestion}>Frage hinzufügen</button>
          <button onClick={() => setIsAddingQuestion(false)}>Abbrechen</button>
        </div>
      )}
    </>
  );
}
