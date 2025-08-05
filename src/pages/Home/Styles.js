import styled from "styled-components";

export const StylesHome = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px; /* importante pra dar espaço quando a altura crescer */

  .content {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.43);
    padding: 10px;
    width: 90%;
    max-width: 1000px;
    border-radius: 10px;
    border: 2px solid black;
    background-color: #1e3a8a;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .content .part1 {
    margin-top: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap; /* evita quebrar feio em telas menores */
  }



  .content .part1 .title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  img {
    width: 40px;
  }

  .content .part1 p {
    font-size: 1rem;
    cursor: pointer;
  }

  .content .part2 {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .content .part2 .aba {
    display: flex;
    background-color: #152c6bff;
    padding: 10px;
    font-size: 0.65rem;
    overflow-x: auto;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 20px;
    white-space: nowrap;
  }

  .inputs {
    display: flex;
    flex-direction: column;
  }

  .inputs input {
    padding: 10px;
    font-size: 1rem;
    background-color: #152c6bff;
    border: 1px solid white;
    border-radius: 5px;
    border-end-end-radius: 0px;
    border-end-start-radius: 0px;
    color: white;
    outline: none;
    max-width: 700px;
    width: 100%;
  }

  .inputs button {
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border: none;
    background-color: #152c6bff;
    color: white;

    
  }

  .text{
    width: 140px;
  }

  .tasks {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
  }

  .task-header,
  .task-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 12px;
    background-color: #152c6bff;
    border-radius: 6px;
    font-weight: 500;
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 0.8rem;
    cursor: pointer;
    transition: 0.2s ease;
    align-items: center;

    &:hover {
      transform: scale(1.010);
    }
  }

  .task-item .removeButton {
    background: transparent;
    color: black !important;
    font-size: 1.8rem;
    padding: 5px;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      color: #e61122ff !important;
    }
  }

  .task-header {
    background-color: #152c6bff;
    font-weight: bold;
  }

  .add {
    font-size: 1.5rem;
    background: transparent;
    font-weight: bold;
    border: none;
    color: white;
  }

  footer {
    text-align: center;
    padding: 10px;
    font-size: 0.8rem;
  }



  @media screen and (min-width: 468px) {
    .content .part2 .aba {
      font-size: 0.9rem;
    }

    .content .part2 .aba .add {
      font-size: 1.8rem;
    }

    .task-header {
      font-size: 0.9rem;
    }

    .tasks .task-item {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 530px) {
    .content .part2 .aba {
      font-size: 1rem;
    }

    .content .part2 .aba .add {
      font-size: 2rem;
    }

    .task-header {
      font-size: 1rem;
    }

    .tasks .task-item {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      background-color: white;
      border: none;
      padding-top: 0px;
      padding: 0;
    }

    .content .part1 {
      background: transparent;
      padding: 10px 15px;
      border: none;
      /* border-radius: 10px 10px 0 0; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 20px;
      gap: 0px;
    }


     .task-item .removeButton {
      font-size: 2.5rem;
     }

     .text{
      width: 240px;
     }
    .content .task-item .status {
      padding: 5px;
      font-weight: bold;
    }

    .content .part2 {
      padding-top: 0;
      background-color: white;
      padding: 20px;
    }

    .content .part2 .aba {
      background-color: transparent;
      color: black;
      font-size: 1.3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 15px;
      margin-top: -10px;
      margin-bottom: 20px;
    }

    .content .part2 .aba .add {
      font-size: 2rem;
      color: black;
    }

    .content .part1 .title {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .content .part1 .user {
      font-weight: 500;
      color: white;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      background-color: #007bff; /* azul */
    }

    .content .part1 {
      display: flex;
      align-items: center;
      margin-top: 0;
      padding: 30px;
    }

    .content .part1 p {
      font-size: 1.1rem;
    }

    .status-list {
      display: flex;
      flex-direction: column; /* empilha verticalmente */
      align-items: center; /* centraliza horizontalmente */
      justify-content: center; /* centraliza verticalmente */
      gap: 8px; /* espaço entre status */
      width: 100px; /* largura fixa para centralizar melhor */
    }


    .text{
      text-align: start;
      max-width: 250px;
    }

    .status {
      font-weight: bold;
      text-align: center;
    }

    .aba {
      background-color: #007bff; /* azul */
     
      top: 0;
      left: 0;
     
      padding-top: 0;
      margin-top: 10px !important;
      border: 1px solid;
    }

    .aba p {
      cursor: pointer;
      padding: 10px;
      border-radius: 5px;
      transition: 0.4s ease;

      &:hover {
        background-color: #007bff; /* azul */
        color: white;
      }
    }

    /* .aba .add{
      cursor: pointer;
      transition: .4s ease;
      &:hover{
        transform: scale(1.1);
      }
    } */

    .inputs {
      flex-direction: row;
      gap: 10px;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    }

    .inputs input {
      background-color: white;
      color: black;
      padding: 15px;
      font-size: 1.1rem;
      border: 1px solid black;
      border-end-end-radius: 5px;
      border-end-start-radius: 5px;
    }

    .inputs button {
      background-color: #11d331ff; /* Verde limão suave */
      padding: 15px;
      font-size: 1.1rem;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: 0.2s ease;

      &:hover {
        background-color: #0fec37ff;
      }
    }

    .part2 .task-header {
      background-color: #007bff; /* azul */
      padding: 15px;
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .part2 .task-item {
      background-color: white;
      color: black;
      border: 1px solid;
      padding: 15px;
      font-size: 1.1rem;
      
    }

    .tasks {
      margin-top: 0;
    }

    footer {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      background: white;
      margin-top: 0px;
      color: black;
      border-end-end-radius: 10px;
      border-end-start-radius: 10px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content .part1 {
      padding: 40px;
    }

    .content .part1 h1 {
      font-size: 2.8rem;
    }

    .content .part1 p {
      font-size: 1.3rem;
    }

    img {
      width: 50px;
      margin-right: 10px;
    }

    .aba p {
      cursor: pointer;
      padding: 10px;
      border-radius: 5px;
      transition: 0.4s ease;

      &:hover {
        background-color: #007bff; /* azul */
        color: white;
      }

      font-size: 1.3em;
    }

    .aba .add {
      font-size: 2.8rem !important;
    }

    .part2 .task-header {
      padding: 20px;
      font-size: 1.5rem;
    }

    .part2 .task-item {
      padding: 20px;
      font-size: 1.4rem;
    }

    footer {
      font-size: 1.2rem !important;
    }
  }
`;
