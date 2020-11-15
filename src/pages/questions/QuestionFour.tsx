import React, { useEffect, useState } from "react";

import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionThree.css";

const QuestionFour: React.FC = () => {
  const [ideal, setIdeal] = useState(false);
  const [model, setModel] = useState(false);
  const [mvp, setMvp] = useState(false);
  const [client, setClient] = useState(false);

  const [stage, setStage] = useState<string[]>([]);
  const [stored, setStored] = useState<object>();

  useEffect(() => {
    const data = localStorage.getItem("elo-provider");
    if (data) {
      let stored = JSON.parse(data);
      let newTarget = { ...stored, stages: [] };
      setStored(newTarget);
    }
  }, []);

  function getStage(item: string): void {
    setStage([...stage, item]);
    let newTarget = { ...stored, stages: [...stage, item] };

    setStored(newTarget);
    localStorage.setItem("elo-provider", JSON.stringify(newTarget));
  }

  function removeStage(item: string): void {
    const position = stage.indexOf(item);
    stage.splice(position, 1);
    setStage([...stage]);

    let newTarget = { ...stored, stages: [...stage] };

    setStored(newTarget);
    localStorage.setItem("elo-provider", JSON.stringify(newTarget));
  }

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
              onClick={() => {
                setIdeal(false);
                removeStage("ideal");
              }}
            >
              Idéia
            </button>
          ) : (
            <button
              id="ideal"
              type="button"
              className={ideal ? "active" : ""}
              onClick={() => {
                setIdeal(true);
                getStage("ideal");
              }}
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
              onClick={() => {
                setModel(false);
                removeStage("model");
              }}
            >
              Modelo de negócio
            </button>
          ) : (
            <button
              id="model"
              type="button"
              className={model ? "active" : ""}
              onClick={() => {
                setModel(true);
                getStage("model");
              }}
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
              onClick={() => {
                setMvp(false);
                removeStage("mvp");
              }}
            >
              MVP
            </button>
          ) : (
            <button
              id="mvp"
              type="button"
              className={mvp ? "active" : ""}
              onClick={() => {
                setMvp(true);
                getStage("mvp");
              }}
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
              onClick={() => {
                setClient(false);
                removeStage("client");
              }}
            >
              Possui Clientes
            </button>
          ) : (
            <button
              id="client"
              type="button"
              className={client ? "active" : ""}
              onClick={() => {
                setClient(true);
                getStage("cliente");
              }}
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
