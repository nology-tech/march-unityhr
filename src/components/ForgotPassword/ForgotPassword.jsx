import "./ForgotPassword.scss";

import AuthenticationLeft from "../AuthenticationPageLeft/AuthenticationPageLeft";
import React from "react";

const ForgotPassword = (props) => {
  const { handleInput, emailInput, handleSubmit, errorMessage } = props;
  return (
    <section className="forgotten-password">
      <AuthenticationLeft />

      <form data-testid="form-element"className="forgotten-password-form" onSubmit={handleSubmit}>
        <h2 className="forgotten-password-form__heading">
          Forgotten your Password{" "}
        </h2>
        <p className="forgotten-password-form__caption">
          That's no worries. We all make mistakes from time to time. Just enter
          your email address below to get a link to change your password
        </p>
        <label
          className="forgotten-password-form__emailLabel"
          htmlFor="Email Address"
        >
          Email Address
        </label>
        <input
          className="forgotten-password-form__emailInput"
          type="text"
          name="Email Address"
          value={emailInput}
          onInput={handleInput}
        ></input>
        <button data-testid="button-element"className="forgotten-password-form__submitButton">
          Submit
        </button>
        <p className="forgotten-password-form__textMessage"> {errorMessage}</p>
      </form>
    </section>
  );
};
export default ForgotPassword;
