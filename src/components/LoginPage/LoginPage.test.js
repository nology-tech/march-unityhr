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

it("should render the basic email input fields with correct email address", () => {
  render(<LoginPage />);

  const emailInput = screen.getByRole("textbox", {
    name: /email address/i,
  });
  userEvent.type(emailInput, "blanchejarrett@db.com");

  expect(emailInput).toBeInTheDocument();
});
// TO TEST THAT WHEN INPUTS ARE CORRECT THE SUCCESS MESSAGE IS SHOWN & ERROR MESSAGE IS NOT SHOW

it("should render the success message when email inputs with @ symbol are correct and success message shown", () => {
  render(<LoginPage />);

  const emailInput = screen.getByRole("textbox", {
    name: /email address/i,
  });
  userEvent.type(emailInput, "blanchejarrett@db.com");

  const button = screen.getByRole("button", { name: /login/i });
  userEvent.click(button);
  const successMessage = screen.getByText(/valid email/i);
  expect(successMessage).toBeInTheDocument();
  expect(successMessage).toBeTruthy();
});

it("should render the error message when email inputs are missing @ symbol and are not correct and error message shown", () => {
  render(<LoginPage />);

  const emailInput = screen.getByRole("textbox", {
    name: /email address/i,
  });
  userEvent.type(emailInput, "blanchejarrettdb.com");

  const button = screen.getByRole("button", { name: /login/i });
  userEvent.click(button);
  const errorMessage = screen.getByText(/please enter a valid email address/i);
  expect(errorMessage).toBeInTheDocument();
});

it("should render the success message when password inputs is more than 8 characters and success message shown", () => {
  render(<LoginPage />);

  const passwordInput = screen.getByRole(/password/i);
  userEvent.type(passwordInput, "••••••••••");

  const button = screen.getByRole("button", { name: /login/i });
  userEvent.click(button);
  const successMessage = screen.getByText(/valid password/i);
  expect(successMessage).toBeInTheDocument();
});

it("should render the error message when password inputs is empty and error message shown", () => {
  render(<LoginPage />);

  const passwordInput = screen.getByRole(/password/i);
  userEvent.type(passwordInput, "");

  const button = screen.getByRole("button", { name: /login/i });
  userEvent.click(button);
  const errorMessage = screen.getByText(/please enter a valid password/i);
  expect(errorMessage).toBeInTheDocument();
});

it("should render the error message when password less than or equal to 8 characters and error message shown", () => {
  render(<LoginPage />);

  const passwordInput = screen.getByRole(/password/i);
  userEvent.type(passwordInput, "••••••");

  const button = screen.getByRole("button", { name: /login/i });
  userEvent.click(button);
  const errorMessage = screen.getByText(
    /Password should be more than 8 characters/i
  );
  expect(errorMessage).toBeInTheDocument();
});
