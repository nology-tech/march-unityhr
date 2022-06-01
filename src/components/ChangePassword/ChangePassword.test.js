import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ChangePassword from "./ChangePassword";

describe("<ChangePassword/> testing user interaction", () => {
  // case 1
  it("should display 'Password Changed' message when both inputs are correct", () => {
  render(<ChangePassword />);

  const password1Input = screen.getByTestId("password-one")
  userEvent.type(password1Input, "password-changed")

  const password2Input = screen.getByTestId("password-two")
  userEvent.type(password2Input, "password-changed")

  const button = screen.getByRole('button', {
    name: /submit/i
  })
  userEvent.click(button)

  const message = screen.getByText(/password changed/i);

  expect(message).toBeInTheDocument();
  });

  // case 2
  it("should display error message 'Entered passwords don't match' when one is correct, one incorrect", () => {
  render(<ChangePassword />);

  const password1Input1 = screen.getByTestId("password-one")
  userEvent.type(password1Input1, "password-changed")

  const password2Input1 = screen.getByTestId("password-two")
  userEvent.type(password2Input1, "Please enter a valid password")

  const button = screen.getByRole('button', {
    name: /submit/i
  })
  userEvent.click(button)

  const message = screen.getByText(/entered passwords don't match/i);

  expect(message).toBeInTheDocument();
  });
  
  // case 3
  it("should display error message 'Please enter a valid password' when both are empty", () => {
  render(<ChangePassword />);

  const password1Input2 = screen.getByTestId("password-one")
 // userEvent.type(password1Input2, "")

  const password2Input2 = screen.getByTestId("password-two")
 // userEvent.type(password2Input2, "")
 // no input
  const button = screen.getByRole('button', {
    name: /submit/i
  })
  userEvent.click(button)

  const message = screen.getByText(/please enter a valid password/i);

  expect(message).toBeInTheDocument();
  });

});
