import React, { useState } from "react";
import { StylesHome } from "./Styles";
import timer from "../../assets/img-timer.png";
import { v4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";

function ProdutimeHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const firstName = location.state?.firstName || "usuário";
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      status:'Concluída',
      text: "Fazer relatório da empresa.",
    },
    {
      id: v4(),
      status:'Pendente',
      text: "Adicionar uma funcionalidade nova no sistema",
    },
    {
      id: v4(),
      status:'Em andamento',
      text: "Conversar com novo cliente",
    },
  ]);
  const [input, setInput] = useState("");
  const [text,  setText] = useState(`Olá, ${firstName}`);



  const addTasks = () => {
    if(!input.trim()){
      alert('Digite a tarefa!');
      return
    }
    setTasks([
      ...tasks,
      {
        id: v4(),
        status:'Pendente',
        text: input,
      },
    ]);
    setInput(""); // limpa input após adicionar
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const leave = () => {
   navigate('/')
  }


  return (
    <StylesHome>
      <div className="content">
        <div className="part1">
          <div className="title">
            <img src={timer} alt="Imagem do Timer da Logo" />
            <h1>Produtime</h1>
          </div>

          <div className="user" onMouseEnter={()=>setText('Sair do Produtime')}
                                onMouseLeave={()=>setText(`Olá, ${firstName}!`)}>
            <p onClick={leave}>{text}</p>
          </div>
        </div>
        <div className="part2">
          <div className="aba">
            <p>Todas</p>
            <p>Pendentes</p>
            <p>Concluidas</p>
            <p>Em andamento</p>
          </div>

          <div className="inputs">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Digite a tarefa..."
            />
            <button onClick={addTasks}>Adicionar</button>
          </div>

          <div className="tasks">
            <div className="task-header">
              <p>Tarefa</p>
              <p>Status</p>
            </div>

            {tasks.map((t) => (
              <div key={t.id} className="task-item">
                <p className="text">{t.text}</p>
                <div className="status-list">
                  <p className="status">{t.status}</p>
                </div>
                <p>1:20:00</p>
                <button onClick={() => removeTask(t.id)} className="removeButton">X</button>
              </div>
            ))}
          </div>
        </div>
        <footer>&copy; 2025 Produtime. Sua produtividade em foco.</footer>
      
      </div>
    </StylesHome>
  );
}

export default ProdutimeHome;
