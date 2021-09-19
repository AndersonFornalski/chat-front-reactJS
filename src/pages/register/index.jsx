import axios from "axios";
import React, { useRef }  from "react";
import { useHistory } from "react-router";
import "./style.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if( confirmPassword.current.value !== password.current.value ){
        confirmPassword.current.setCustomValidity("Senha nao e igual, por favor confirme!")
    } else{
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        }
        try {
           await axios.post("/auth/register", user );
           history.push("/login")
        } catch (err) {
            throw(err)
        }
    }
    
  }

  return (
    <div className="login">
      <div className="loginWrapper">       
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input
                className="loginInput" 
                placeholder="Nome de Usuario" 
                required 
                ref={username} 
                 />
            <input 
                className="loginInput" 
                placeholder="E-mail"
                required 
                type="email"
                ref={email} />
            <input 
                className="loginInput"
                placeholder="Senha"
                required 
                minLength="6"
                type="password"
                ref={password}  />
            <input 
                className="loginInput"
                placeholder="Confirme a senha" 
                required
                minLength="6"
                type="password"
                ref={confirmPassword} />
            
            <button className="loginButton">Cadastrar</button>
          </form>
            <button className="loginRegisterButton">
              Entre na sua conta
            </button>
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

export default Register;