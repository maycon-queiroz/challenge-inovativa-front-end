import React, { useEffect, useState, FormEvent } from "react";
import { useLocation, useHistory } from "react-router-dom";

import TopBar from "../components/topBar/TopBar";

import "./styles.css";
import api from "../../services/api";

interface dataI {
  user_id?: string;

  target?: string;

  skills?: string;

  initial?: string;

  state?: string;
}

const Startup: React.FC = () => {
  const history = useHistory();
  const location = useLocation<Request>();
  const [Data, setData] = useState<dataI>(() => {
    const data = localStorage.getItem("elo-provider");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (!Data.user_id) {
      history.push("/");
    }
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(event);
  }

  return (
    <div className="question">
      <div className="content-wrapper">
        <TopBar customWidth="25"></TopBar>
        form
      </div>
    </div>
  );
};

export default Startup;
