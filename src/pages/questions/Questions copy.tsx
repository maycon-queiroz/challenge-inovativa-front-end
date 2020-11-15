import React, { useEffect, useState, FormEvent } from "react";
import { useLocation } from "react-router-dom";

import TopBar from "../components/topBar/TopBar";

import "../../styles/pages/questions/questionOne.css";
import api from "../../services/api";

interface Request {
  email?: string;
}

const QuestionOneTestComponent: React.FC = () => {
  const location = useLocation<Request>();

  const [user, setUser] = useState("");

  useEffect(() => {
    const userEmail = location.state.email;

    api.get(`users/${userEmail}`).then(response => {
      setUser(response.data);
    });
  }, []);

  return (
    <div className="question">
      <TopBar customWidth="310" />
      <div className="content-wrapper">
        <div className="title">
          <h2>Quase lá</h2>
          <p>Oi, como podemos ajudar você?</p>
        </div>

        <form onSubmit={() => {}} method="POST">
          <div className="check">
            <input type="radio" id="cofundador" name="value"></input>
            <label htmlFor="value">
              <h4>Encontre um cofundador</h4>
              <p>Conecte-se com potenciais parceiros de negócios.</p>
            </label>
          </div>

          <div className="check">
            <input type="radio" id="mentor" name="value"></input>
            <label htmlFor="value">
              <h4>Encontre um mentor</h4>
              <p>
                Conecte-se com grandes consultores para ajudar a orientá-lo.
              </p>
            </label>
          </div>

          <div className="check">
            <input type="radio" id="consultor" name="value"></input>
            <label htmlFor="value">
              <h4>Torne-se um consultor (inscreva-se)</h4>
              <p>
                Ajude as startups a crescer compartilhando seu conhecimento.
              </p>
            </label>
          </div>

          <div className="check">
            <input type="radio" id="networking" name="value"></input>
            <label htmlFor="value">
              <h4>Apenas networking</h4>
              <p>
                Explore projetos paralelos, empregos, oportunidades de
                freelancer e mentoria.
              </p>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionOneTestComponent;
