import React from "react";
import { NavLink } from "react-router-dom";

const image =
  "https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2Fskills.jpg?alt=media&token=ca3f5157-dcea-4750-b124-7e85c184eab9";
export const Skills = () => {
  return (
    <div
      className="main__sections skills__area animation__animated animation__fadeIn"
      style={{ animationDelay: "1s" }}
    >
      <NavLink exact to="/skills">
        <h2 className="titles"> Skills </h2>
      </NavLink>
      <figure className='section__background'>
        <img src={ image } alt="" />
      </figure>
    </div>
  );
};
