import { useEffect, useState } from "react";
import "./App.css";
import type { Joke, ActiveTab } from "./types";
import Tabbar from "./components/Tabbar";
import JokeList from "./components/JokeList";

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("newJokes");
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);
  const [activeJoke, setActiveJoke] = useState<number | null>(null);

  async function fetchJokes() {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_ten",
    );
    const data = await response.json();
    setJokes(data.slice(0, 4));
    setActiveJoke(null);
  }

  useEffect(() => {
    fetchJokes();
  }, []);

  function saveJoke(joke: Joke) {
    if (savedJokes.some((saved) => saved.id === joke.id)) {
      setSavedJokes(savedJokes.filter((saved) => saved.id !== joke.id));
      return;
    }
    setSavedJokes([...savedJokes, joke]);
  }

  function showJoke(id: number) {
    setActiveJoke(id);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Jokes app 🃏</h1>
        <Tabbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "library" ? (
          <JokeList
            jokes={savedJokes}
            saveJoke={saveJoke}
            showJoke={showJoke}
            activeJoke={activeJoke}
            savedJokes={savedJokes}
          />
        ) : (
          <JokeList
            jokes={jokes}
            saveJoke={saveJoke}
            showJoke={showJoke}
            activeJoke={activeJoke}
            savedJokes={savedJokes}
          />
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => fetchJokes()}
            className="w-12 h-12 bg-[#595cdd] text-white rounded-full text-xl shadow-md hover:bg-[#4a4ec4] transition-colors flex items-center justify-center">
            ↻
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
