export default function ProgressBar({ currentIndex, total, timeLeft, timePerQuestion }) {
  const progress = (currentIndex / total) * 100;
  const timePct = (timeLeft / timePerQuestion) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span className="font-semibold">
          Question {currentIndex + 1} / {total}
        </span>
        <span className="font-semibold">
          ⏳ {timeLeft}s
        </span>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200">
        <div
          className="h-full bg-sky-600 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden border border-gray-200">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-200"
          style={{ width: `${timePct}%` }}
        />
      </div>
    </div>
  );
}