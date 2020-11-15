import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { MdPersonOutline } from "react-icons/md";
import { FiSettings, FiLogOut } from "react-icons/fi";

import logo from "../../../images/logo.svg";

import "./sideBar.css";

interface SideBarProps {
  isLogo: boolean;
}

function SideBar({ isLogo }: SideBarProps) {
  return (
    <div className="side">
      <div className="logo">
        {isLogo ? (
          <Link to="/user">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
        ) : (
          <Link to="/user">
            <h1>elo</h1>
          </Link>
        )}
      </div>

      <div className="icons">
        <Link to="/">
          <AiFillHome size={26} color="#ffffff" />
        </Link>

        <Link to="/">
          <GiGraduateCap size={26} color="#ffffff" />
        </Link>

        <Link to="/">
          <MdPersonOutline size={26} color="#ffffff" />
        </Link>

        <Link to="/">
          <AiOutlineMail size={26} color="#ffffff" />
        </Link>

        <Link to="/">
          <FiSettings size={26} color="#ffffff" />
        </Link>
      </div>

      <footer className="exit">
        <Link to="/">
          <FiLogOut size={26} color="#ffffff" />
        </Link>
      </footer>
    </div>
  );
}

export default SideBar;
