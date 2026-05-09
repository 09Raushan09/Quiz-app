export default function StartScreen({ onStart, totalQuestions, timePerQuestion }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-lg">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-sky-200/50 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-indigo-200/40 blur-2xl" />

        <div className="relative p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 border border-sky-100">
            <span className="text-lg">🧠</span>
            <span className="font-semibold text-sky-800">Random Knowledge Quiz</span>
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Learn, Practice, <span className="text-sky-700">Excel</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Each question has <span className="font-semibold text-gray-900">15 seconds</span> time limit.
            If the timer runs out, the question will be marked as 'Missing,' and the next question will appear automatically.
          </p>

          <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
              <div className="text-sm text-gray-500">Total Questions</div>
              <div className="text-2xl font-extrabold">{totalQuestions}</div>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
              <div className="text-sm text-gray-500">Time / Question</div>
              <div className="text-2xl font-extrabold">{timePerQuestion}s</div>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
              <div className="text-sm text-gray-500">Scoring</div>
              <div className="text-sm text-gray-700 mt-1">
                Correct / Incorrect / Missing
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              onClick={onStart}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-white font-bold shadow-lg shadow-sky-600/25 hover:bg-sky-700 transition"
            >
              Start Quiz <span>→</span>
            </button>

            <div className="w-full sm:w-auto text-center sm:text-left text-sm text-gray-500">
              Tips: Please select the options quickly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}