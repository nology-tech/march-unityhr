import AuthenticationPageLeft from "../AuthenticationPageLeft/AuthenticationPageLeft";
import "./LoginPage.scss";

const LoginPage = ({ emailInput, passwordInput, onChange }) => {
  return (
    <section className="login-container">
      <AuthenticationPageLeft />

      <form className="login-form">
        <h1 className="login-container__title">Login UnityHR</h1>
        <label className="login-form__email">Email Address</label>
        <input
          type="text"
          placeholder="steve.walker@unity.io"
          required
          emailValue={emailInput}
          className="login-form__email--input"
        />

        <br />

        <label className="login-form__password">Password</label>
        <input
          type="password"
          required
          id="user-password"
          placeholder="••••••••••"
          minLength="8"
          passValue={passwordInput}
          className="login-form__password--input"
        />
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

        <button className="login-form__button" type="button">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;