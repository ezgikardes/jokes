import type { Joke } from "../types";

type JokeCardProps = {
  joke: Joke;
  saveJoke: (joke: Joke) => void;
  showJoke: (id: number) => void;
  isRevealed: boolean;
  isSaved: boolean;
};

export default function JokeCard({
  joke,
  saveJoke,
  showJoke,
  isRevealed,
  isSaved,
}: JokeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start justify-between gap-4">
      <div className="flex-1">
        <p className="text-xs font-semibold text-[#5952cc] uppercase tracking-wide mb-2 capitalize">
          {joke.type}
        </p>
        <p className="text-gray-800 text-sm font-medium mb-3">{joke.setup}</p>
        {isRevealed ? (
          <p className="text-gray-500 text-sm italic">{joke.punchline}</p>
        ) : (
          <button
            onClick={() => showJoke(joke.id)}
            className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50 transition-colors">
            <span>Show</span>
            <span>👁</span>
          </button>
        )}
      </div>
      <button
        onClick={() => saveJoke(joke)}
        className={`transition-colors mt-1 flex-shrink-0 ${isSaved ? "text-[#595cdd]" : "text-gray-300 hover:text-[#595cdd]"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={isSaved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
}
