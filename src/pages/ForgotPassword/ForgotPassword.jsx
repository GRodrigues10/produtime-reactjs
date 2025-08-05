import React, { useState } from "react";
import { StylesForgotPassword } from "./Styles";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();
  const leave = () => {
    if(!newPassword.trim() || !confirmNewPassword.trim()){
        alert('Preencha todos os campos!');
        return;
    }
    navigate("/");
  };
  return (
    <StylesForgotPassword>
      <div className="content">
        <h1>Redefinir Senha</h1>
        <input
          type="password"
          placeholder="Digite a nova senha..."
          autoComplete="new-password"
          value={newPassword}
          onChange={(e)=>setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a senha..."
          autoComplete="new-password"
          value={confirmNewPassword}
          onChange={(e)=>setConfirmNewPassword(e.target.value)}
        />
        <button onClick={leave}>Alterar</button>
      </div>
    </StylesForgotPassword>
  );
}

export default ForgotPassword;
