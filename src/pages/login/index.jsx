import { CircularProgress } from "@material-ui/core";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./style.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked")
    loginCall({ email: email.current.value, 
                password: password.current.value }, dispatch );
  }
  console.log(user)
  
  return (
    <div className="login">
      <div className="loginWrapper">        
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input placeholder="Email" required  type="email" className="loginInput" ref={email} />
            <input 
              placeholder="Password" 
              required ref={password} 
              type="password" 
              className="loginInput"
              minLength="6" />
            
            <button className="loginButton">
              { isFetching 
              ? <CircularProgress color="success" size="30px"/> 
              : "Entrar" }
            </button>
            
            <span className="loginForgot">esqueceu sua senha?</span>
            <Link to={"/cadastro"}>
              <button 
                className="loginRegisterButton"
                >
                Crie Uma Nova Conta
              </button>
            </Link>
          </form>
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