import React, { useState } from "react";
import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionTwo.css";

const QuestionTwo: React.FC = () => {
  const [design, setDesign] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [business, setBusiness] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [ux, setUx] = useState(false);
  const [manage, setManage] = useState(false);

  return (
    <>
      <HeaderQuestion
        title="Que habilidades específicas você possui?"
        description="Adicione quantos quiser!"
      />

      <div className="botoes">
        <label htmlFor="design">
          {design ? (
            <button
              id="design"
              type="button"
              className={design ? "active" : ""}
              onClick={() => setDesign(false)}
            >
              Design
            </button>
          ) : (
            <button
              id="design"
              type="button"
              className={design ? "active" : ""}
              onClick={() => setDesign(true)}
            >
              Design
            </button>
          )}
        </label>
        <label htmlFor="marketing">
          {marketing ? (
            <button
              id="marketing"
              type="button"
              className={marketing ? "active" : ""}
              onClick={() => setMarketing(false)}
            >
              Marketing
            </button>
          ) : (
            <button
              id="marketing"
              type="button"
              className={marketing ? "active" : ""}
              onClick={() => setMarketing(true)}
            >
              Marketing
            </button>
          )}
        </label>

        <label htmlFor="business">
          {business ? (
            <button
              id="business"
              type="button"
              className={business ? "active" : ""}
              onClick={() => setBusiness(false)}
            >
              Business
            </button>
          ) : (
            <button
              id="business"
              type="button"
              className={business ? "active" : ""}
              onClick={() => setBusiness(true)}
            >
              Business
            </button>
          )}
        </label>

        <label htmlFor="developer">
          {developer ? (
            <button
              id="business"
              type="button"
              className={developer ? "active" : ""}
              onClick={() => setDeveloper(false)}
            >
              Desenvolvedor
            </button>
          ) : (
            <button
              id="business"
              type="button"
              className={developer ? "active" : ""}
              onClick={() => setDeveloper(true)}
            >
              Desenvolvedor
            </button>
          )}
        </label>

        <label htmlFor="ux">
          {ux ? (
            <button
              id="business"
              type="button"
              className={ux ? "active" : ""}
              onClick={() => setUx(false)}
            >
              UX
            </button>
          ) : (
            <button
              id="business"
              type="button"
              className={ux ? "active" : ""}
              onClick={() => setUx(true)}
            >
              UX
            </button>
          )}
        </label>

        <label htmlFor="manage">
          {manage ? (
            <button
              id="business"
              type="button"
              className={manage ? "active" : ""}
              onClick={() => setManage(false)}
            >
              Gestão
            </button>
          ) : (
            <button
              id="business"
              type="button"
              className={manage ? "active" : ""}
              onClick={() => setManage(true)}
            >
              Gestão
            </button>
          )}
        </label>
      </div>
    </>
  );
};

export default QuestionTwo;
