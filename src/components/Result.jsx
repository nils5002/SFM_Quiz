export default function Result({ correctUnswers, totalQuestions, onRestart }) {
  // Berechnung der Prozentsatz der richtigen Antworten
  const percentage = (correctUnswers / totalQuestions) * 100;

  // Nachricht, die angezeigt wird
  const resultMessage =
    percentage >= 60
      ? `Bestanden! Du hast ${correctUnswers} von ${totalQuestions} richtig beantwortet. (${Math.round(percentage)}%)`
      : `Leider nicht bestanden. Du hast ${correctUnswers} von ${totalQuestions} richtig beantwortet. (${Math.round(percentage)}%)`;

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Trophäe" />
      <h2>{resultMessage}</h2>
      <button onClick={onRestart}>Noch einmal versuchen</button>
    </div>
  );
}
