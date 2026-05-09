import { useMemo, useState } from "react";
import StartScreen from "./components/StartScreen.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ScoreSummary from "./components/ScoreSummary.jsx";
import quizData from "./data/quizData.js";

export default function App() {
  const [mode, setMode] = useState("start");
  const [result, setResult] = useState(null);

  const questions = useMemo(() => {
    return [...quizData].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [mode === "start"]); 

  function handleStart() {
    setResult(null);
    setMode("quiz");
  }

  function handleFinish(finalResult) {
    setResult(finalResult);
    setMode("summary");
  }

  function goToHome() {
    setResult(null);
    setMode("start");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {mode === "start" && (
        <StartScreen
          onStart={handleStart}
          totalQuestions={questions.length}
          timePerQuestion={15}
        />
      )}

      {mode === "quiz" && (
        <QuizPage
          questions={questions}
          timePerQuestion={15}
          onFinish={handleFinish}
        />
      )}

      {mode === "summary" && (
        <ScoreSummary
          result={result}
          totalQuestions={questions.length}
          onRetry={handleStart}
          onHome={goToHome}
        />
      )}
    </div>
  );
}