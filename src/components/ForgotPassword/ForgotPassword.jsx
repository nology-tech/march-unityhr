import "./ForgotPassword.scss";

import AuthenticationLeft from "../AuthenticationPageLeft/AuthenticationPageLeft";
import React from "react";

const ForgotPassword = (props) => {
  const { handleInput ,emailInput,handleSubmit,ErrorMessage} = props;
  return (
    <section className="forgotten-password">
      <AuthenticationLeft />

      {/* <div className="forgotten-password-form"> */}
      <form className="forgotten-password-form"  onSubmit={handleSubmit}>
        <h2 className="forgotten-password-form__heading">
          Forgotten your Password{" "}
        </h2>
        <p className="forgotten-password-form__caption">
          That's no worries. We all make mistakes from time to time. Just enter
          your email address below to get a link to change your password
        </p>
        <label
          className="forgotten-password-form__EmailLabel"
          htmlFor="Email Address"
        >
          Email Address
        </label>
        <input
          className="forgotten-password-form__EmailInput"
          type="text"
          name="Email Address"
          value={emailInput}
          onInput={handleInput}
        ></input>
        <button
          className="forgotten-password-form__SubmitButton"
       
        >      
          Submit
        </button>
       
      </form>
      <p> {ErrorMessage}</p>
    </section>
  );
};
export default ForgotPassword;
