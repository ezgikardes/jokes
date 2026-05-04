import type { ActiveTab } from "../types";

type TabBarProps = {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
};

export default function Tabbar({ activeTab, setActiveTab }: TabBarProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => setActiveTab("newJokes")}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
          activeTab === "newJokes"
            ? "bg-[#595cdd] text-white"
            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
        }`}>
        New Jokes
      </button>
      <button
        onClick={() => setActiveTab("library")}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
          activeTab === "library"
            ? "bg-[#595cdd] text-white"
            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
        }`}>
        Library
      </button>
    </div>
  );
}
