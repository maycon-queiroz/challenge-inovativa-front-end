import React, { useEffect, useState } from "react";

import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionThree.css";

const QuestionThree: React.FC = () => {
  const [provider, setProvider] = useState<boolean>(false);

  return (
    <>
      <HeaderQuestion title="Você já possui startup?" />

      <div className="botoes">
        <button
          type="button"
          data-id="1"
          className={provider ? "active" : ""}
          onClick={() => setProvider(true)}
        >
          Sim, já possuo
        </button>

        <button
          type="button"
          data-id="0"
          className={!provider ? "active" : ""}
          onClick={() => setProvider(false)}
        >
          Ainda não
        </button>
      </div>
    </>
  );
};

export default QuestionThree;
