import { render, screen } from "@testing-library/react";
import App from "./App";
import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";

describe("search element", () => {
  it("verifica se il component welcome sia presente", () => {
    render(<App />);
    const welcome = screen.getByText(/benvenuti/i);
    expect(welcome).toBeInTheDocument();
  });
});

describe("checks whether the number of rendered cards ", () => {
  it("is equal to the number of books", () => {
    render(<App />);
    const books = screen.getAllByRole("img");
    expect(books).toHaveLength(fantasy.length);
  });
});

describe("check component commentArea is render", () => {
  it("check component commentArea is render", () => {
    it("check component commentArea is render", () => {
      render(<App />);
      const commentArea = screen.getByText(/commenta/i);
    });
  });
});
