import React, { useState } from "react";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const AuthenticationPages = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  
  const handleInput = (event) => {
    const input = event.target.value;
    console.log(input);
    setInput(input);
  };

  const handleSubmit=(event)=>{ 
    console.log(event);
   event.preventDefault();
   
const positionAt=input.indexOf("@");
    if (input.includes("@") && input.includes(".") && positionAt>0){
      console.log("true");
      if (positionAt<input.indexOf(".")) {console.log("true")}
      else { 
      
      setErrorMessage("Please enter a valid Email Address");
    }
    } else{
   
      setErrorMessage("Please enter a valid Email Address");
  }
  
  /*   console.log("validation is next"); */
  }

  // input validation/
  // submit button function
  return <ForgotPassword handleInput={handleInput} emailInput={input} handleSubmit={handleSubmit} errorMessage={handleSubmit}/>;
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
