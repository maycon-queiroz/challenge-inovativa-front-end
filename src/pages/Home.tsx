import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/home.css';

import logoImg from "../images/logo-02.svg";
import nuvemImg from "../images/nuvem-palavras.svg";

const Home: React.FC = () => {
    return(
        <div id="page-landing">
          <div className="logo">
            <img src={logoImg} alt="Elo digital"/>
          </div>
          
          <main className="nuvemImg">
            <img src={nuvemImg} alt="Nuvem de palavras"/>
          </main>
    
          <Link to="/" className="enter-app">
            <FiArrowRight size={26} color="#fff" />
          </Link>
        </div>
      );
};

export default Home;
