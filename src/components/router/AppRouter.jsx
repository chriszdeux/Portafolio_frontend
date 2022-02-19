import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AboutMePage } from '../about-me-page/AboutMePage';
import { CircleBackground } from '../animations/CircleBackground';
import { ContactPage } from '../contact-page/ContactPage';
import { Header } from '../header/Header';
import { HobbiesPage } from '../hobbies-page/HobbiesPage';
import { MainPage } from '../main-page/MainPage';
import { ProjectPage } from '../projects-page/ProjectPage';
import { SkillPage } from '../skills-page/SkillsPage';
export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ MainPage }/>
        <Route exact path='/projects'  component={ ProjectPage }/>
        <Route exact path='/about' component={ AboutMePage }/>
        <Route exact path='/skills' component={ SkillPage }/>
        {/* <Route exact path='/hobbies' component={ HobbiesPage }/> */}
        <Route exact path='/contact' component={ ContactPage }/>
      </Switch>
      {/* <section className="animation">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </section> */}
      <CircleBackground />
    </Router>
  )
}
