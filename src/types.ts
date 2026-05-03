export type Joke = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

export type ActiveTab = "newJokes" | "library";
