export default function QuestionCard({
  question,
  selectedIndex,
  correctIndex,
  status, // null | "correct" | "incorrect" | "missing"
  onSelect,
  disabled,
}) {
  function getOptionClass(index) {
    // When answered, colorize
    if (status) {
      if (index === correctIndex) {
        return "border-green-500 bg-green-50 text-green-800";
      }
      if (index === selectedIndex && status === "incorrect") {
        return "border-red-500 bg-red-50 text-red-800";
      }
    }
    return "border-gray-200 hover:border-sky-300 hover:bg-sky-50";
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-5 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-100 px-4 py-2">
            <span className="text-lg">📝</span>
            <span className="text-sm font-semibold text-sky-800">MCQ</span>
          </div>

          <h2 className="mt-5 text-xl sm:text-2xl font-extrabold text-gray-900">
            {question.question}
          </h2>

          {status && (
            <div className="mt-4 text-sm font-semibold">
              {status === "correct" && (
                <span className="text-green-700">✅ Correct!</span>
              )}
              {status === "incorrect" && (
                <span className="text-red-700">❌ Incorrect!</span>
              )}
              {status === "missing" && (
                <span className="text-amber-700">⏰ Missing (Time out)</span>
              )}
            </div>
          )}
        </div>

        <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200">
          <span className="text-xl">⭐</span>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {question.options.map((opt, idx) => {
          const isSelected = idx === selectedIndex;
          const optionClass = getOptionClass(idx);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              disabled={disabled || !!status}
              className={[
                "text-left rounded-2xl border px-4 py-3 transition",
                optionClass,
                disabled || status
                  ? "cursor-not-allowed opacity-90"
                  : "cursor-pointer",
                isSelected && !status ? "ring-2 ring-sky-500" : "",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-7 h-7 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-sm font-bold text-gray-700">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{opt}</div>
                  {status && idx === correctIndex && (
                    <div className="text-xs text-green-700 font-semibold mt-1">
                      Correct Answer
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
