import React, { useState } from "react";
import { StylesLogin } from "./Styles";
import img from "../../assets/logo.png";
import emailImg from "../../assets/o-email.png";
import passwordImg from "../../assets/senha.png";
import { useLocation, useNavigate } from "react-router-dom";


function LoginScreen() {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    if (!email.trim() || !password.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
   

    const storedUserJSON = localStorage.getItem('usuario');
    if(!storedUserJSON){
      alert('Usuário não cadastrado, crie uma conta!');
      return;
    }
    const storedUser = JSON.parse(storedUserJSON);
    if(email === storedUser.email && password === storedUser.senha){
      const firstName = email.split('@')[0];
      navigate("/home", {state:{email, firstName}} );
    }
    else{
      alert('Email ou Senha incorretos!')
    }
  };

  const create = () => {
    navigate('/createAccount');
  }

  const forgot = () => {
    navigate('/forgotPassword')
  }

  return (
    <>
      <StylesLogin>
        <div className="content">
          <div className="part1">
            <div className="title">
              <img src={img} alt="Logo-Image" />
              <h1>Produtime</h1>
            </div>
            <p>Gestão de Tarefas Simples.</p>
          </div>

          <div className="part2">
            <div className="inputs">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Email"
                  autoComplete="new-email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  
                />
                <img src={emailImg} alt="Email-logo" className="iconImage" />
              </div>

              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Senha"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <img src={passwordImg} alt="Senha-logo" className="iconImage" />
              </div>

              <button onClick={login}>Entrar</button>
            </div>
            <div className="links">
              <p>
                <strong onClick={forgot}>Esqueceu a senha?</strong>
              </p>
              <p>
                <strong onClick={create}>Criar conta</strong>
              </p>
            </div>
          </div>
        </div>
      </StylesLogin>
    </>
  );
}

export default LoginScreen;
