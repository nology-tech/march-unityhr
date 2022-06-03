import React, { useState } from "react";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const AuthenticationPages = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  const handleSubmit = (event) => {
    const submittedInput = event.target[0].value;
    event.preventDefault();

    const positionAt = submittedInput.indexOf("@");
    if (
      submittedInput.includes("@") &&
      submittedInput.includes(".") &&
      positionAt > 0
    ) {
      if (positionAt < submittedInput.indexOf(".")) { 
        //include backend process here//
      } else {
        setErrorMessage("Please enter a valid Email Address");
      }
    } else {
      setErrorMessage("Please enter a valid Email Address");
    }
  };

  return (
    <ForgotPassword
      handleInput={handleInput}
      emailInput={input}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  );
};

export default AuthenticationPages;
