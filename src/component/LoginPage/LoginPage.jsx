import "./LoginPage.scss";

const LoginPage = ({ emailInput, passwordInput, onChange }) => {
  return (
    <form className="login-form">
      <label className="login-form__email--label">Email Address</label>
      <input
        type="text"
        placeholder="steve.walker@unity.io"
        emailValue={emailInput}
        className="login-form__email--input"
      />

      <br />

      <label className="login-form__password--label">Password</label>
      <input
        type="text"
        placeholder="........."
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
          Forgot Your PassWord?
        </a>
      </section>

      <button className="login-form__button" type="button">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
