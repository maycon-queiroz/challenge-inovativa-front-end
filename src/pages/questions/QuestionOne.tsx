import React, { useEffect, useState, FormEvent } from "react";
import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionOne.css";

const QuestionOne: React.FC = () => {
  return (
    <>
      <HeaderQuestion
        title="Quase lá"
        description="Oi, como podemos ajudar você?"
      />
      <div className="box-check">
        <div className="check">
          <label htmlFor="cofundador">
            <input type="radio" id="cofundador" />
            <span>
              <h4>Encontre um cofundador</h4>
              <p>Conecte-se com potenciais parceiros de negócios.</p>
            </span>
          </label>
        </div>

        <div className="check">
          <label htmlFor="mentor">
            <input type="radio" id="mentor" name="mentor" />
            <span>
              <h4>Encontre um mentor</h4>
              <p>
                Conecte-se com grandes consultores para ajudar a orientá-lo.
              </p>
            </span>
          </label>
        </div>

        <div className="check">
          <label htmlFor="consultor">
            <input type="radio" id="consultor" name="consultor"></input>
            <span>
              <h4>Torne-se um consultor (inscreva-se)</h4>
              <p>
                Ajude as startups a crescer compartilhando seu conhecimento.
              </p>
            </span>
          </label>
        </div>

        <div className="check">
          <label htmlFor="networking">
            <input
              type="radio"
              id="networking"
              name="networking"
              value="networking"
            ></input>
            <span>
              <h4>Apenas networking</h4>
              <p>
                Explore projetos paralelos, empregos, oportunidades de
                freelancer e mentoria.
              </p>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default QuestionOne;
