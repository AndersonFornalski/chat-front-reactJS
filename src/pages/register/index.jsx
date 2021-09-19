import "./style.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">       
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Nome de Usuario" className="loginInput" />
            <input placeholder="E-mail" className="loginInput" />
            <input placeholder="Senha" className="loginInput" />
            <input placeholder="Confirme a senha" className="loginInput" />
            <button className="loginButton">Cadastrar</button>
            <button className="loginRegisterButton">
              Entre na sua conta
            </button>
          </div>
        </div>
        <div className="loginLeft">
          <h3 className="loginLogo">SocialChat</h3>
          <span className="loginDesc">
              Conecte-se com seus amigos no SocialChat.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;