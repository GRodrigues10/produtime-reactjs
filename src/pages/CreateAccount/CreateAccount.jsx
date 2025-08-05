import React, { useState } from "react";
import { StylesCreateAccount } from "./Styles";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");

  const navigate = useNavigate();

  const register = () => {
    if (
      !firstName.trim() ||
      !LastName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      alert("Preencha todos os campos!");
      return;
    }

   const user = {
  email,
  senha: password,
  firstName,
};


    localStorage.setItem("usuario", JSON.stringify(user));
    alert("Usuário cadastrado com sucesso!");
    navigate("/", { state: { firstName } });
  };

  return (
    <>
      <StylesCreateAccount>
        <div className="content">
          <div className="title">
            <h1>Crie sua Conta</h1>
          </div>
          <div className="name">
            <input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Sobrenome"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="account">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              type="text"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="birth">
            <select>
              <option value="day">Day</option>
            </select>

            <select>
              <option value="month">Month</option>
            </select>

            <select>
              <option value="year">Year</option>
            </select>
          </div>
          <div className="btn">
            <button onClick={register}>Criar Conta</button>
          </div>
        </div>
      </StylesCreateAccount>
    </>
  );
}

export default CreateAccount;
