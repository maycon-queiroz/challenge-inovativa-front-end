import React from "react";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";

import frame from "../../../images/Frame.svg";

import "./courses.css";

interface CourseProps {
  name: string;
  time: string;
  evaluation: number;
}

const Courses: React.FC<CourseProps> = ({
  name,
  time,
  evaluation
}: CourseProps) => {
  return (
    <div className="courses">
      <img src={frame} alt="" />
      <h3>{name}</h3>
      <p>{time}</p>
      <p>
        <AiFillFire size={15} /> {evaluation}{" "}
      </p>
      <Link to="">Ver curso</Link>
    </div>
  );
};

export default Courses;
