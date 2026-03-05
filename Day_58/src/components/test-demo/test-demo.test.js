import { render, screen } from "@testing-library/react";
import { TestDemo } from "./test-demo";

test("Title Test", () => {
  render(<TestDemo />);

  let title = screen.getByTestId("title");
  expect(title).toHaveTextContent("Testing Demo");
});

test("Login Link Test", () => {
  render(<TestDemo />);

  let login = screen.getByText(/Login/i);
  expect(login).toBeInTheDocument();
  expect(login).toHaveAttribute("href", "login.html");
});
