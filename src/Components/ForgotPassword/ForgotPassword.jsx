import "./ForgotPassword.scss";
import React from "react";

const ForgotPassword = () => {
  return (
    <section className="forgotten-password">
      <div ></div> 
      <div>
      <form className="forgotten-password-form">
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
        ></input>
        <button className="forgotten-password-form__SubmitButton">
          Submit
        </button>
      </form>
      </div>
    </section>
  );
};
export default ForgotPassword;
