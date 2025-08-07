import React, { useState } from "react";
import { StylesForgotPassword } from "./Styles";
import passwordImg from "../../assets/senha.png";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const leave = () => {
    if (!newPassword.trim() || !confirmNewPassword.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert("As senhas não são iguais. Tente novamente!");
      return;
    }
    navigate("/");
  };

  return (
    <StylesForgotPassword>
      <div className="content">
        <h1>Redefinir Senha</h1>

        <div className="password-wrapper">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="Digite a nova senha..."
            autoComplete="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <img src={passwordImg} alt="Senha-logo" className="iconImage" />
          <span
            className="toggleEmoji"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? "🙉" : "🙈"}
          </span>
        </div>

        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirme a senha..."
            autoComplete="new-password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <img src={passwordImg} alt="Senha-logo" className="iconImage" />
          <span
            className="toggleEmoji"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "🙉" : "🙈"}
          </span>
        </div>

        <button onClick={leave}>Alterar</button>
      </div>
    </StylesForgotPassword>
  );
}

export default ForgotPassword;
