import App from "./App";
import { render, screen } from "@testing-library/react";

it("should render the Login", () => {
  render(<App />);
  const text = screen.queryByText(/Streamlined/i);

  expect(text).toBeInTheDocument();
});
