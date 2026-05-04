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
  }

  useEffect(() => {
    fetchJokes();
  }, []);

  function saveJoke(joke: Joke) {
    setSavedJokes([...savedJokes, joke]);
  }

  function showJoke(id: number) {
    setActiveJoke(id);
  }

  return (
    <>
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
        />
      ) : (
        <JokeList
          jokes={jokes}
          saveJoke={saveJoke}
          showJoke={showJoke}
          activeJoke={activeJoke}
        />
      )}
      <button onClick={() => fetchJokes()}>Refresh</button>
    </>
  );
}

export default App;
