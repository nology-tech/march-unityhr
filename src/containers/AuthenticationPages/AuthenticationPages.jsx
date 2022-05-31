import React, { useState } from "react";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const AuthenticationPages = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    const input = event.target.value;
    console.log(input);
    setInput(input);
  };

  // input validation/
  // submit button function
  return <ForgotPassword handleInput={handleInput} />;
};

export default AuthenticationPages;
