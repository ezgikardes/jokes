import type { Joke } from "../types";
import JokeCard from "./JokeCard";

type JokeListProps = {
  jokes: Joke[];
  saveJoke: (joke: Joke) => void;
  showJoke: (id: number) => void;
  activeJoke: number | null;
};

export default function JokeList({
  jokes,
  saveJoke,
  showJoke,
  activeJoke,
}: JokeListProps) {
  return (
    <div>
      {jokes.map((joke) => (
        <JokeCard
          joke={joke}
          saveJoke={saveJoke}
          showJoke={showJoke}
          isRevealed={activeJoke === joke.id}
          key={joke.id}
        />
      ))}
    </div>
  );
}
