import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from '../header/Header';
import { MainPage } from '../main-page/MainPage';
import { ProjectPage } from '../projects-page/ProjectPage';
export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ MainPage }/>
        <Route exact path='/project-page'  component={ ProjectPage }/>
      </Switch>
      {/* <section className="animation">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </section> */}
    </Router>
  )
}
