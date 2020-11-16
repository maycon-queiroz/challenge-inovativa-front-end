import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import SideBar from "../../pages/components/siderLogo/Siderbar";

import "../../styles/pages/login.css";

import api from "../../services/api";

interface LoginInterface {
  id?: string;
  email?: string;

  name?: string;
}

interface MessageInterface {
  type: string;

  message: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState<string>("");
  const [terms, setTerms] = useState(false);

  const [initial, setInitial] = useState(false);
  const [message, setMessage] = useState<MessageInterface>();

  function getEmail(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setInitial(true);
  }

  function getTerms() {
    if (!terms) {
      setTerms(true);
    } else {
      setTerms(false);
    }
  }

  async function createUser(
    event: FormEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    // try {
    //   const response = await api.post<LoginInterface>("users", {
    //     name,
    //     email,
    //     password,
    //     terms
    //   });
    //   const user_id = response.data.id;
    //   localStorage.setItem("elo-provider", JSON.stringify({ user_id }));
    history.push("/question");
    // } catch (error) {
    //   setMessage({
    //     type: "error",
    //     message: "this email already exists another user, please choose another"
    //   });

    //   setInitial(false);
    //   setTerms(false);
    // }
  }

  return (
    <div className="page-login">
      <SideBar />
      <form id="form-login" method="post">
        {!initial ? (
          <>
            <div className="content">
              <h2>Evolua sua ideia</h2>
              <p>
                Tenha ajuda de especialistas para todos os tipos de
                investimentos ao seu alcance.
              </p>

              <div className="email">
                <p>Email</p>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <span>{message?.message}</span>
            </div>

            {email !== "" && (
              <>
                <button
                  type="button"
                  className="enter-login"
                  onClick={getEmail}
                >
                  Avançar
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <div className="content">
              <h2>Quase lá</h2>
              <p>
                Nos diga como podemos chamar você e crie uma senha segura para
                acessar a conta.
              </p>

              <div className="name">
                <p>Nome:</p>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </div>

              <div className="password">
                <p>Senha:</p>
                <input
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="off"
                  onChange={event => setPassword(event.target.value)}
                />
              </div>

              <div className="terms">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  onClick={getTerms}
                />
                <label htmlFor="terms">
                  <strong>Li e concordo com os termos de uso</strong>
                </label>
              </div>
            </div>

            {terms && name !== "" && password !== "" && (
              <button
                type="button"
                className="create-account"
                form="form-login"
                onClick={createUser}
              >
                Criar conta
              </button>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
