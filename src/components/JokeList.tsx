import type { Joke } from "../types";
import JokeCard from "./JokeCard";

type JokeListProps = {
  jokes: Joke[];
  saveJoke: (joke: Joke) => void;
  showJoke: (id: number) => void;
  activeJoke: number | null;
  savedJokes: Joke[];
};

export default function JokeList({
  jokes,
  saveJoke,
  showJoke,
  activeJoke,
  savedJokes,
}: JokeListProps) {
  if (jokes.length === 0) {
    return (
      <p className="text-center text-gray-400 text-sm mt-10">
        No jokes here yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {jokes.map((joke) => (
        <JokeCard
          joke={joke}
          saveJoke={saveJoke}
          showJoke={showJoke}
          isRevealed={activeJoke === joke.id}
          key={joke.id}
          isSaved={savedJokes.some((saved) => saved.id === joke.id)}
        />
      ))}
    </div>
  );
}
