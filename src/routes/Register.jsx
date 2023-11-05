import useFormRegister from "../hooks/useCreateUserForm";
import "../styles/forms.scss";
const Register = () => {
  const { nameRef, emailRef, passwordRef, confirmPasswordRef, handleSubmit } =
    useFormRegister();

  return (
    <section className="container">
      <div className="form-container">
        <h2>Cadastre-se</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            autoFocus
            required
            ref={nameRef}
            placeholder="Insira seu nome"
          />

          <label>Email</label>
          <input
            type="text"
            name="Email"
            required
            ref={emailRef}
            placeholder="Insira seu email"
          />

          <label>Senha</label>
          <input
            type="password"
            name="Senha"
            required
            ref={passwordRef}
            placeholder="Insira sua senha"
          />

          <label>Confirme sua senha</label>
          <input
            type="password"
            name="Confirme sua senha"
            required
            ref={confirmPasswordRef}
            placeholder="Confirme sua senha"
          />
          <button type="submit">Registrar-se</button>
        </form>
      </div>
    </section>
  );
};
export default Register;
