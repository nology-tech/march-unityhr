import React, { useState } from "react";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const AuthenticationPages = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedInput = event.target[0].value;

    const positionAt = submittedInput.indexOf("@");
    if (
      submittedInput.includes("@") &&
      submittedInput.includes(".") &&
      positionAt > 0
    ) {
      if (positionAt < submittedInput.indexOf(".")) {
        //include backend process here//
        setErrorMessage("");
        setSuccessMessage("Your new password has been sent to your email");
      } else {
        setSuccessMessage("");
        setErrorMessage("Please enter a valid Email Address");
      }
    } else {
      setSuccessMessage("");
      setErrorMessage("Please enter a valid Email Address");
    }
  };

  return (
    <ForgotPassword
      handleInput={handleInput}
      emailInput={input}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
      successMessage={successMessage}
    />
  );
};

export default AuthenticationPages;
