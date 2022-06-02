import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthenticationPages from "../../containers/AuthenticationPages/AuthenticationPages";
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";

describe("<ForgotPassword/> Show the correct elements", () => {
  it("should render the form", () => {
    /*    render(<AuthenticationPages />); */
    render(<ForgotPassword />);
    const forgotPasswordForm = screen.getByTestId("form-element");
    expect(forgotPasswordForm).toBeInTheDocument();
  });
  // 1. Email address is getting
  //onclick 
 it("should render the error message  when the email id is not valid", () => {
    const button = screen.getByTestId("button-element");
   
    userEvent.click(button);
    const errorMessage= screen.getByText(/please enter a valid email address/i)
    expect(errorMessage).toBeInTheDocument();

  }); 

 
  // Template
  it("", () => {});
});
