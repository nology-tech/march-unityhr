import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ChangePassword from "./ChangePassword";

describe("<ChangePassword/> testing user interaction", () => {
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

  it

});
/* you'll just need to test that the component does what it says, i.e.
what happens when both inputs are correct
what happens when one is correct, one incorrect
what happens when both are incorrect */

/* describe("<Form/> testing user interaction", () => {
  it("should not submit the form with invalid text and will show warning", () => {
  render(<Form />);

  // get our inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  // type in to them
  // element to type into, what you want to type
  userEvent.type(nameInput, "")
  
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(emailInput, "notavalidemail");

  // get our button
  // - click on it
  const button = screen.getByRole("button", {name: /sign in/i});
  userEvent.click(button);
  // check the screen for error message
  const errorMessage = screen.getByText(/Sorry something went wrong/i);
  expect(errorMessage).toBeInTheDocument(); 
  // oder:
  expect(errorMessage).toBeTruthy();
  // check the screen doesn't have success message
  
  const successMessage = screen.queryByText(/Thank you for submitting/i);
  expect(successMessage).not.toBeInTheDocument();
  // oder:
  expect(successMessage).toBeFalsy();
}) */

