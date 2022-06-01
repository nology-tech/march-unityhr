import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginPage from "./LoginPage";

describe("<LoginPage/> Show the correct elements", () => {
  it("should render the form", () => {
    render(<LoginPage />);
    const login = screen.getByRole("form");
    expect(login).toBeInTheDocument();
  });
});

it("should render the basic email input fields", () => {
  render(<LoginPage />);

  const emailInput = screen.getByRole("textbox", {
    name: /email address/i,
  });
  userEvent.type(emailInput, "blanchejarrett@db.com");

  //const emailInput = screen.getByPlaceholderText(/e.g. steve.walker@unity.io/i);
  expect(emailInput).toBeInTheDocument();
  //expect(emailInput).toBeInTheDocument();
});
