import React, { useEffect, useState } from "react";
import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionTwo.css";

const QuestionTwo: React.FC = () => {
  const [design, setDesign] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [business, setBusiness] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [ux, setUx] = useState(false);
  const [manage, setManage] = useState(false);

  const [skill, setSkills] = useState<string[]>([]);
  const [stored, setStored] = useState<object>();

  useEffect(() => {
    const data = localStorage.getItem("elo-provider");
    if (data) {
      let stored = JSON.parse(data);
      let newTarget = { ...stored, skills: skill };
      setStored(newTarget);
    }
  }, []);

  function getSkill(item: string): void {
    setSkills([...skill, item]);
    let newTarget = { ...stored, skills: [...skill, item] };

    setStored(newTarget);
    localStorage.setItem("elo-provider", JSON.stringify(newTarget));
  }

  function removeSkill(item: string): void {
    const position = skill.indexOf(item);
    skill.splice(position, 1);
    setSkills([...skill]);

    let newTarget = { ...stored, skills: [...skill] };

    setStored(newTarget);
    localStorage.setItem("elo-provider", JSON.stringify(newTarget));
  }

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
              onClick={() => {
                setDesign(false);
                removeSkill("design");
              }}
            >
              Design
            </button>
          ) : (
            <button
              id="design"
              type="button"
              className={design ? "active" : ""}
              onClick={() => {
                setDesign(true);
                getSkill("design");
              }}
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
              onClick={() => {
                setMarketing(false);
                removeSkill("marketing");
              }}
            >
              Marketing
            </button>
          ) : (
            <button
              id="marketing"
              type="button"
              className={marketing ? "active" : ""}
              onClick={() => {
                setMarketing(true);
                getSkill("marketing");
              }}
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
              onClick={() => {
                setBusiness(false);
                removeSkill("business");
              }}
            >
              Business
            </button>
          ) : (
            <button
              id="business"
              type="button"
              className={business ? "active" : ""}
              onClick={() => {
                setBusiness(true);
                getSkill("business");
              }}
            >
              Business
            </button>
          )}
        </label>

        <label htmlFor="developer">
          {developer ? (
            <button
              id="developer"
              type="button"
              className={developer ? "active" : ""}
              onClick={() => {
                setDeveloper(false);
                removeSkill("developer");
              }}
            >
              Desenvolvedor
            </button>
          ) : (
            <button
              id="developer"
              type="button"
              className={developer ? "active" : ""}
              onClick={() => {
                setDeveloper(true);
                getSkill("developer");
              }}
            >
              Desenvolvedor
            </button>
          )}
        </label>

        <label htmlFor="ux">
          {ux ? (
            <button
              id="ux"
              type="button"
              className={ux ? "active" : ""}
              onClick={() => {
                setUx(false);
                removeSkill("ux");
              }}
            >
              UX
            </button>
          ) : (
            <button
              id="ux"
              type="button"
              className={ux ? "active" : ""}
              onClick={() => {
                setUx(true);
                getSkill("ux");
              }}
            >
              UX
            </button>
          )}
        </label>

        <label htmlFor="manage">
          {manage ? (
            <button
              id="manage"
              type="button"
              className={manage ? "active" : ""}
              onClick={() => {
                setManage(false);
                removeSkill("manage");
              }}
            >
              Gestão
            </button>
          ) : (
            <button
              id="manage"
              type="button"
              className={manage ? "active" : ""}
              onClick={() => {
                setManage(true);
                getSkill("manage");
              }}
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
