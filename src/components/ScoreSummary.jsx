export default function ScoreSummary({ result, totalQuestions, onRetry, onHome }) {  
  if (!result) return null;

  const { correct, incorrect, missing } = result;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16">
      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-100 px-4 py-2">
              <span className="text-lg">🏁</span>
              <span className="text-sm font-semibold text-sky-800">Quiz Summary</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold text-gray-900">
              Your Results
            </h2>

            <p className="mt-3 text-gray-600">
              Total Questions: <span className="font-semibold text-gray-900">{totalQuestions}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={onHome}
              className="inline-flex justify-center items-center gap-2 rounded-2xl bg-gray-100 px-6 py-3 text-gray-700 font-bold hover:bg-gray-200 transition active:scale-95"
            >
              🏠 Home
            </button>
            
            <button
              onClick={onRetry}
              className="inline-flex justify-center items-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-white font-bold shadow-lg shadow-sky-600/25 hover:bg-sky-700 transition active:scale-95"
            >
              Retry Quiz <span>↻</span>
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-green-50 border border-green-200 p-5">
            <div className="text-sm font-semibold text-green-800">Correct</div>
            <div className="mt-2 text-4xl font-extrabold text-green-900">{correct}</div>
          </div>
          <div className="rounded-2xl bg-red-50 border border-red-200 p-5">
            <div className="text-sm font-semibold text-red-800">Incorrect</div>
            <div className="mt-2 text-4xl font-extrabold text-red-900">{incorrect}</div>
          </div>
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
            <div className="text-sm font-semibold text-amber-800">Missing</div>
            <div className="mt-2 text-4xl font-extrabold text-amber-900">{missing}</div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
          <div className="font-semibold text-gray-900 mb-1">Quick Guide:</div>
          <p>Aapne {correct} sawalon ke sahi jawab diye hain. Agli baar aur behtar karne ki koshish karein!</p>
        </div>
      </div>
    </div>
  );
}