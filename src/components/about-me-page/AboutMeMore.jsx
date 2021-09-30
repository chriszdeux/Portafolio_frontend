import React from 'react';
import { NavLink } from 'react-router-dom';


export const AboutMeMore = () => {
  return (
    <div className="about__me__more animate__animated animate__fadeInRight">
      <NavLink to="/hobbies-page">
        <button className="btn btn--primary">what i like?</button>
      </NavLink>
      <NavLink to="/contact-page">
        <button className="btn btn--primary">contact me</button>
      </NavLink>
    </div>
  )
}
