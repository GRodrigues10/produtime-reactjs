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
      status: "Concluída",
      text: "Fazer relatório da empresa.",
    },
    {
      id: v4(),
      status: "Pendente",
      text: "Adicionar uma funcionalidade nova no sistema",
    },
    {
      id: v4(),
      status: "Iniciada",
      text: "Conversar com novo cliente",
    },
  ]);

  const [input, setInput] = useState("");
  const [text, setText] = useState(`Olá, ${firstName}`);
  const [timers, setTimers] = useState({});
  const [filter, setFilter] = useState("Todas");

  const addTasks = () => {
    if (!input.trim()) {
      alert("Digite a tarefa!");
      return;
    }
    setTasks([
      ...tasks,
      {
        id: v4(),
        status: "Pendente",
        text: input,
      },
    ]);
    setInput(""); // limpa input após adicionar
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const leave = () => {
    navigate("/");
  };

  const cycleStatus = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const nextStatus = getNextStatus(task.status);
        return { ...task, status: nextStatus };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const getNextStatus = (current) => {
    const order = ["Pendente", "Iniciada", "Concluída"];
    const currentIndex = order.indexOf(current);
    const nextIndex = (currentIndex + 1) % order.length;
    return order[nextIndex];
  };

  const toggleTimer = (id) => {
    const current = timers[id] || {
      elapsed: 0,
      running: false,
      intervalId: null,
    };

    if (current.running) {
      // ⛔ Pausar: limpar intervalo existente
      clearInterval(current.intervalId);
      setTimers((prev) => ({
        ...prev,
        [id]: { ...current, running: false, intervalId: null },
      }));
    } else {
      // ✅ Iniciar: primeiro cria o intervalo
      const intervalId = setInterval(() => {
        setTimers((prev) => {
          const updated = { ...prev };
          if (updated[id]) {
            updated[id] = {
              ...updated[id],
              elapsed: updated[id].elapsed + 1,
            };
          }
          return updated;
        });
      }, 1000);

      // 🧠 Depois atualiza o estado com o novo intervalId
      setTimers((prev) => ({
        ...prev,
        [id]: { ...current, running: true, intervalId },
      }));
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const getFilteredTasks = () => {
    if (filter === "Todas") return tasks;
    return tasks.filter((task) => task.status === filter);
  };

  return (
    <StylesHome>
      <div className="content">
        <div className="part1">
          <div className="title">
            <img src={timer} alt="Imagem do Timer da Logo" />
            <h1>Produtime</h1>
          </div>

          <div
            className="user"
            onMouseEnter={() => setText("Sair do Produtime")}
            onMouseLeave={() => setText(`Olá, ${firstName}!`)}
          >
            <p onClick={leave}>{text}</p>
          </div>
        </div>
        <div className="part2">
          <div className="aba">
            <p onClick={() => setFilter("Todas")}>Todas</p>
            <p onClick={() => setFilter("Pendente")}>Pendentes</p>
            <p onClick={() => setFilter("Concluída")}>Concluídas</p>
            <p onClick={() => setFilter("Iniciada")}>Iniciada</p>
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
              <p>Tarefas</p>
              {/* <p>Status</p>
           
              <p>Remover</p> */}
            </div>

            {/* <div className="task-coheader">
              <p>Tarefa</p>
              <p>Status</p>
              <p>Tempo</p>
              <p>Remover</p>
            </div> */}

            {getFilteredTasks().map((t) => (
              <div key={t.id} className="task-item">
                <p className="text">{t.text}</p>
                <div className="status-list">
                  <p className="status" onClick={() => cycleStatus(t.id)}>
                    {t.status}
                  </p>
                </div>
                <p onClick={() => toggleTimer(t.id)}>
                  {formatTime(timers[t.id]?.elapsed || 0)}
                </p>
                <button
                  onClick={() => removeTask(t.id)}
                  className="removeButton"
                >
                  X
                </button>
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
