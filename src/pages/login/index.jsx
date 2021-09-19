import "./style.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">        
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Entrar</button>
            <span className="loginForgot">esqueceu sua senha?</span>
            <button className="loginRegisterButton">
              Crie Uma Nova Conta
            </button>
          </div>
        </div>

        <div className="loginLeft">
          <h3 className="loginLogo">Bate-Papo Social</h3>
          <span className="loginDesc">
            Conecte-se com seus amigos no Bate-Papo Social.
          </span>
        </div>

      </div>
    </div>
  );
}

export default Login;