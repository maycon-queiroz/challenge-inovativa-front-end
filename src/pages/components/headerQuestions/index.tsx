import React from "react";

interface TitleProps {
  title: string;

  description?: string;
}

const Header: React.FC<TitleProps> = ({ title, description }: TitleProps) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Header;
