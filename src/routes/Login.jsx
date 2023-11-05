import useFormLogin from "../hooks/useLoginUserForm";

import "../styles/forms.scss";

const Login = () => {
  const { emailRef, passwordRef, handleSubmit, loginWithGoogle } =
    useFormLogin();
  useFormLogin();

  return (
    <section className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Insira seu email"
            autoFocus
            ref={emailRef}
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Insira sua senha"
            ref={passwordRef}
          />
          <button type="submit">Login</button>
        </form>
        <button type="submit" onClick={loginWithGoogle}>
          Login com Google
        </button>
      </div>
    </section>
  );
};
export default Login;
