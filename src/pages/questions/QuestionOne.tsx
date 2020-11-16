import React, { useEffect, useState, FormEvent } from "react";
import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionOne.css";

const QuestionOne: React.FC = () => {
  const [target, setTarget] = useState<object>();

  function getTarget(item: string): void {
    const data = localStorage.getItem("elo-provider");
    if (data) {
      let { user_id } = JSON.parse(data);
      let newTarget = { user_id, target: item };
      setTarget(newTarget);
      localStorage.setItem("elo-provider", JSON.stringify(newTarget));
    }
  }

  return (
    <>
      <HeaderQuestion
        title="Quase lá"
        description="Oi, como podemos ajudar você?"
      />
      <div className="box-check">
        <div className="check">
          <input
            type="radio"
            id="cofundador"
            name="value"
            onClick={() => getTarget("cofundador")}
          ></input>
          <label htmlFor="cofundador">
            <h4>Encontre um cofundador</h4>
            <p>Conecte-se com potenciais parceiros de negócios.</p>
          </label>
        </div>

        <div className="check">
          <input
            type="radio"
            id="mentor"
            name="value"
            onClick={() => getTarget("mentor")}
          ></input>
          <label htmlFor="mentor">
            <h4>Encontre um mentor</h4>
            <p>Conecte-se com grandes consultores para ajudar a orientá-lo.</p>
          </label>
        </div>

        <div className="check">
          <input
            type="radio"
            id="consultor"
            name="value"
            onClick={() => getTarget("consultor")}
          ></input>
          <label htmlFor="consultor">
            <h4>Torne-se um consultor (inscreva-se)</h4>
            <p>Ajude as startups a crescer compartilhando seu conhecimento.</p>
          </label>
        </div>

        <div className="check">
          <input
            type="radio"
            id="networking"
            name="value"
            onClick={() => getTarget("networking")}
          ></input>
          <label htmlFor="networking">
            <h4>Apenas networking</h4>
            <p>
              Explore projetos paralelos, empregos, oportunidades de freelancer
              e mentoria.
            </p>
          </label>
        </div>
      </div>
    </>
  );
};

export default QuestionOne;
