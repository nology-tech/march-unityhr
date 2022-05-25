import "./ForgotPassword.scss";
import React from "react";

const ForgotPassword = () => {
  return(

 
    <div className="forgotten-password">
       
      <form className="forgotten-password__box">
        <h2 className="forgotten-password--heading">Forgotten your Password </h2>
        <p>That's no worries. We all make mistakes from time to time. Just enter your email address below to get a link to change your password</p>
        <label className="forgotten-password--EmailLabel" for="Email Address"></label>
        <input className="forgotten-password--EmailInput" type="text" name="Email Address"></input>
        <button className="forgotten-password--SubmitButton">submit</button>
       
      </form>
      <section>
          <h2>Streamlined task management</h2>
       
      </section>
    </div>
  )
};
export default ForgotPassword;
