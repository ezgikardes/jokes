import type { Joke } from "../types";

type JokeCardProps = {
  joke: Joke;
  saveJoke: (joke: Joke) => void;
  showJoke: (id: number) => void;
  isRevealed: boolean;
};

export default function JokeCard({
  joke,
  saveJoke,
  showJoke,
  isRevealed,
}: JokeCardProps) {
  return (
    <div>
      <div>
        <p>{joke.type}</p>
        <p>{joke.setup}</p>
        <p>
          {isRevealed ? (
            joke.punchline
          ) : (
            <button onClick={() => showJoke(joke.id)}>Show</button>
          )}
        </p>
      </div>
      <button onClick={() => saveJoke(joke)}>save</button>
    </div>
  );
}
