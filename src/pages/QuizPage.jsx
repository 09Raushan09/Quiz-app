import { useEffect, useMemo, useRef, useState } from "react";
import ProgressBar from "../components/ProgressBar.jsx";
import QuestionCard from "../components/QuestionCard.jsx";

export default function QuizPage({ questions, timePerQuestion, onFinish }) {
  const total = questions.length;

  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [status, setStatus] = useState(null); // correct | incorrect | missing
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [missing, setMissing] = useState(0);

  const timerRef = useRef(null);
  const lockRef = useRef(false);

  const question = useMemo(() => questions[index], [questions, index]);

  const disabled = lockRef.current;

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goNext() {
    clearTimer();
    setSelectedIndex(null);
    setStatus(null);
    lockRef.current = false;

    const next = index + 1;
    if (next >= total) {
      onFinish({ correct, incorrect, missing });
      return;
    }

    setIndex(next);
    setTimeLeft(timePerQuestion);
  }

  function handleSelect(optIndex) {
    if (lockRef.current) return;
    lockRef.current = true;

    setSelectedIndex(optIndex);

    const isCorrect = optIndex === question.correctIndex;

    if (isCorrect) {
      setCorrect((c) => c + 1);
      setStatus("correct");
    } else {
      setIncorrect((c) => c + 1);
      setStatus("incorrect");
    }

    setTimeout(() => {
      goNext();
    }, 800);
  }

  // Timer per question
  useEffect(() => {
    clearTimer();
    setTimeLeft(timePerQuestion);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimer();
  }, [index, timePerQuestion]);

  // When time runs out => missing + next question
  useEffect(() => {
    if (timeLeft <= 0 && !status && !lockRef.current) {
      lockRef.current = true;
      setStatus("missing");
      setMissing((m) => m + 1);

      setTimeout(() => { goNext();}, 800);
    }
  }, [timeLeft, status]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 shadow-sm">
          <span className="text-lg">⚡</span>
          <span className="font-semibold text-gray-800">Quiz in Progress</span>
        </div>

        <button
          type="button"
          onClick={() => onFinish({ correct, incorrect, missing })}
          className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          Exit
        </button>
      </div>

      <ProgressBar
        currentIndex={index}
        total={total}
        timeLeft={timeLeft}
        timePerQuestion={timePerQuestion}
      />

      <div className="mt-6">
        <QuestionCard
          question={question}
          selectedIndex={selectedIndex}
          correctIndex={question.correctIndex}
          status={status}
          onSelect={handleSelect}
          disabled={disabled}
        />
      </div>
    </div>
  );
}