import { useState } from "react";
import "./App.css";
import type { Joke, ActiveTab } from "./types";
// import Jokelist from "./components/JokeList";
// import Tabbar from "./components/Tabbar";

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("newJokes");
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);
  const [activeJoke, setActiveJoke] = useState<Set<number>>(new Set());

  return <></>;
}

export default App;
