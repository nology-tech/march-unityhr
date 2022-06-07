import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";

describe("<ForgotPassword/> Show the correct elements", () => {
  it("should render the form", () => {
    /*    render(<AuthenticationPages />); */
    render(<ForgotPassword />);
    const forgotPasswordForm = screen.getByTestId("form-element");
    expect(forgotPasswordForm).toBeInTheDocument();
  });

});





/*  1. Email address is getting */
  //onclick 
/*  it("should render the error message  when the email id is not valid", () => {
    render(<ForgotPassword />);

    const emailInput=screen.getByTestId("email_Input")

    userEvent.type(emailInput,"soudeh.gmail@com");

    const button = screen.getByTestId("button-element");
   
    userEvent.click(button);
    const errorMessage= screen.getByTestId("error_message")
    expect(errorMessage).toBeInTheDocument();
});  */

 


/*  it("should render errormessage when form is submitted with invalid email-address", async () => { */
  /*     onSubmit.mockImplementation(event => {
        event.preventDefault();
      });
 */
    /* const onSubmit = jest.fn(); 
    const props = 
      render(<ForgotPassword />);
      const button = screen.getByText("Submit").closest("button");
      if (button) {
        /* fireEvent.submit(screen.getByRole('form')); */
      /*   userEvent.click(button); 
      }
      const message=screen.getByTestId("error_message")
      expect(message).toBeInTheDocument() */
  /*     await wait(() => expect(onSubmit).toHaveBeenCalled()); */
/*  }); 
  */ 
 
/* it("should render the success message  when the email id is valid", () => {
    render(<ForgotPassword />);

    const emailInput=screen.getByTestId("email_Input")

    userEvent.type(emailInput,"soudeh.gmail@com");

    const button = screen.getByTestId("button-element");
   
    userEvent.click(button);
    const errorMessage= screen.getByTestId("error_message")
    expect(errorMessage).toBeInTheDocument();
}); */
 