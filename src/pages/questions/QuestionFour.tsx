import React, { useState } from "react";

import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionThree.css";

const QuestionFour: React.FC = () => {
  const [ideal, setIdeal] = useState(false);
  const [model, setModel] = useState(false);
  const [mvp, setMvp] = useState(false);
  const [client, setClient] = useState(false);

  return (
    <>
      <HeaderQuestion title="Em que estágio está seu projeto ou negócio?" />

      <div className="botao">
        <label htmlFor="ideal">
          {ideal ? (
            <button
              id="ideal"
              type="button"
              className={ideal ? "active" : ""}
              onClick={() => setIdeal(false)}
            >
              Idéia
            </button>
          ) : (
            <button
              id="ideal"
              type="button"
              className={ideal ? "active" : ""}
              onClick={() => setIdeal(true)}
            >
              Idéia
            </button>
          )}

          <span className={model && ideal ? "active" : ""} />
        </label>

        <label htmlFor="model">
          {model ? (
            <button
              id="model"
              type="button"
              className={model ? "active" : ""}
              onClick={() => setModel(false)}
            >
              Modelo de negócio
            </button>
          ) : (
            <button
              id="model"
              type="button"
              className={model ? "active" : ""}
              onClick={() => setModel(true)}
            >
              Modelo de negócio
            </button>
          )}

          <span className={mvp && model ? "active" : ""} />
        </label>

        <label htmlFor="mvp">
          {mvp ? (
            <button
              id="mvp"
              type="button"
              className={mvp ? "active" : ""}
              onClick={() => setMvp(false)}
            >
              MVP
            </button>
          ) : (
            <button
              id="mvp"
              type="button"
              className={mvp ? "active" : ""}
              onClick={() => setMvp(true)}
            >
              MVP
            </button>
          )}

          <span className={client && mvp ? "active" : ""} />
        </label>

        <label htmlFor="client">
          {client ? (
            <button
              id="client"
              type="button"
              className={client ? "active" : ""}
              onClick={() => setClient(false)}
            >
              Possui Clientes
            </button>
          ) : (
            <button
              id="client"
              type="button"
              className={client ? "active" : ""}
              onClick={() => setClient(true)}
            >
              Possui Clientes
            </button>
          )}
        </label>
      </div>
    </>
  );
};

export default QuestionFour;
