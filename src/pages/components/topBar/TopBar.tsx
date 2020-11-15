import React from "react";
import { Link } from "react-router-dom";

import "./topBar.css";

interface TopBarProps {
  children?: React.ReactNode;
  customWidth: string;
}

function TopBar({ children, customWidth }: TopBarProps) {
  return (
    <div className="top-bar">
      <header>
        <Link to="/" className="hide"></Link>
        <h1>elo</h1>
        {children}
      </header>
      <hr style={{ width: customWidth + "%" }} />
    </div>
  );
}

export default TopBar;
