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

// Scanner myScannner = new Scanner(System.in);
// System.out.println("Please enter the email address : ");
// String  inputEmail = myScannner.next();
// System.out.println("The email address that you have entered is : " + inputEmail);
// int indexOfAt = inputEmail.indexOf('@');
// //            System.out.println(indexOfAt);
// if (inputEmail.contains("@") & inputEmail.contains(".") & (indexOfAt > 0 )) {
//     if ((inputEmail.indexOf('@')) < (inputEmail.indexOf('.'))) {
//         System.out.println("True");
//     } else {
//         System.out.println("False - @  . - wrong order of placement");
//     }
// }  else  {
//         System.out.println("False -  does not contain @ or . / character before @ ");
// }

// }
