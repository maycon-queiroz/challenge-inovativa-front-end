import React, { useEffect, useState, FormEvent } from "react";
import { useLocation, useHistory } from "react-router-dom";

import TopBar from "../components/topBar/TopBar";

import "../../styles/pages/questions/questionOne.css";
import api from "../../services/api";

import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";

interface dataI {
  user_id?: string;

  target?: string;

  skills?: string;

  initial?: string;

  stage?: string;
}

interface MessageInterface {
  type: string;

  message: string;
}

const Questions: React.FC = () => {
  const history = useHistory();
  const [message, setMessage] = useState<MessageInterface>();

  const [Data, setData] = useState<dataI>(() => {
    const data = localStorage.getItem("elo-provider");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  const [questionOne, setQuestionOne] = useState(true);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThee, setQuestionThee] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);

  useEffect(() => {
    if (!Data.user_id) {
      history.push("/");
    }
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = localStorage.getItem("elo-provider");
    if (data) {
      // try {
      const { id, target, skills, stage, initial } = JSON.parse(data);

      const response = await api.put<dataI>("stage", {
        user_id: id,
        target
        skills,
        initial,
        stage,
      });

      history.push("/user");
      // } catch (error) {
      //   setMessage({
      //     type: "error",
      //     message:
      //       "this email already exists another user, please choose another"
      //   });
      // }
    }
  }

  return (
    <div className="question">
      <div className="content-wrapper">
        {questionOne && (
          <>
            <TopBar customWidth="25">
              <button
                type="submit"
                onClick={event => {
                  setQuestionOne(false);
                  setQuestionTwo(true);
                }}
                className="next"
              >
                Avançar
              </button>
            </TopBar>

            <QuestionOne />
          </>
        )}
        {questionTwo && (
          <>
            <TopBar customWidth="50">
              <button
                onClick={() => {
                  setQuestionTwo(false);
                  setQuestionThee(true);
                }}
                className="next"
              >
                Avançar
              </button>
            </TopBar>
            <QuestionTwo />
          </>
        )}
        {questionThee && (
          <>
            <TopBar customWidth="75">
              <button
                onClick={() => {
                  setQuestionThee(false);
                  setQuestionFour(true);
                }}
                className="next"
              >
                Avançar
              </button>
            </TopBar>
            <QuestionThree />
          </>
        )}
        {questionFour && (
          <>
            <TopBar customWidth="90">
              <button onClick={handleSubmit} className="next">
                Avançar
              </button>
            </TopBar>
            <QuestionFour />
          </>
        )}
      </div>
    </div>
  );
};

export default Questions;
