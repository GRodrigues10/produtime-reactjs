import React, { useState } from "react";
import { StylesCreateAccount } from "./Styles";
import { useNavigate } from "react-router-dom";
import passwordImg from "../../assets/senha.png";
import emailImg from "../../assets/o-email.png";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Novos estados para os selects
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  // Arrays para preencher os selects
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const register = () => {
    if (
      !firstName.trim() ||
      !LastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !day ||
      !month ||
      !year
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    const user = {
      email,
      senha: password,
      firstName,
      lastName: LastName,
      birthDate: `${day}/${month}/${year}`,
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
            {/* Campos ocultos para impedir auto-complete */}
            <input
              type="text"
              name="fakeusernameremembered"
              style={{ display: "none" }}
            />
            <input
              type="password"
              name="fakepasswordremembered"
              style={{ display: "none" }}
            />

            <div className="email-wrapper">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="new-email"
                autoComplete="off"
              />
              <img src={emailImg} alt="Email-logo" className="iconImage" />
            </div>

            <div className="password-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="new-password"
                autoComplete="new-password"
              />
              <img src={passwordImg} alt="Senha-logo" className="iconImage" />
              <span
                className="toggleEmoji"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? "🙉" : "🙈"}
              </span>
            </div>
          </div>

          <div className="birth">
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="">Dia</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">Mês</option>
              {months.map((m, index) => (
                <option key={index} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Ano</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
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
