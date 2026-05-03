import type { ActiveTab } from "../types";

type TabBarProps = {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
};

export default function Tabbar({ activeTab, setActiveTab }: TabBarProps) {
  return (
    <div>
      <button
        onClick={() => setActiveTab("newJokes")}
        className={activeTab === "newJokes" ? "active" : ""}>
        New Jokes
      </button>
      <button
        onClick={() => setActiveTab("library")}
        className={activeTab === "library" ? "active" : ""}>
        Library
      </button>
    </div>
  );
}
