import React from "react";
import { useState } from "react";
import AuthenticationPageLeft from "../AuthenticationPageLeft/AuthenticationPageLeft";
import "./LoginPage.scss";

const LoginPage = ({ onChange }) => {
  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === "") {
      setPasswordErrorMessage("Please enter a valid password");
    } else if (password.length <= 8) {
      setPasswordErrorMessage("Password should be more than 8 characters");
    } else {
      setPasswordErrorMessage("Valid Password");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!!email && typeof email === "string" && email.match(emailRegex)) {
      setEmailErrorMessage("Valid Email");
    } else {
      setPasswordErrorMessage("Please enter a valid email address");
    }
  };

  return (
    <section className="login-container">
      <AuthenticationPageLeft />

      <form className="login-form" name="Login">
        <h1 className="login-container__title">Login UnityHR</h1>
        <label htmlFor="email" className="login-form__email">
          Email Address
        </label>
        <input
          id="email"
          type="text"
          placeholder="steve.walker@unity.io"
          required
          onInput={handleEmail}
          className="login-form__email--input"
        />

        <br />

        <label htmlFor="password" className="login-form__password">
          Password
        </label>
        <input
          data-testid="login-password"
          id="password"
          type="password"
          required
          placeholder="••••••••••"
          onInput={handlePassword}
          className="login-form__password--input"
        />
        <span data-testid="password-error" className="errorText">
          {passwordErrorMessage}
        </span>
        <span className="errorText">{emailErrorMessage}</span>
        <br />
        <section className="login-form__checkbox">
          <input
            type="checkbox"
            onChange={onChange}
            value={"checked"}
            className="login-form__checkbox--box"
          />
          <label className="login-form__checkbox--label">Remember Me</label>
          <a className="login-form__checkbox--link" href="url">
            Forgot your password?
          </a>
        </section>

        <button
          className="login-form__button"
          data-testid="login-button"
          type="button"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
