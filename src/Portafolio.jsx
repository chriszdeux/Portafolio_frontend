import React, { useContext, useEffect, useState } from 'react'
import { BackgroundAnimation } from './components/animations/BackgroundAnimation';
import { Header } from './components/header/Header'
import { MainPage } from './components/main-page/MainPage';
import { AppRouter } from './components/router/AppRouter';
import { animationEffect } from './components/utils/animation';
import { DataContext } from './context/dataContext';

import './styles/styles.css';
export const Portafolio = () => {
  const [animation, setAnimation] = useState(animationEffect)
  const [handleProject, setHandleProject] = useState({})
  // useEffect(() => {
  //   setAnimation(animationEffect)
  // }, [])
  // debugger
  return (
    <>
    <DataContext.Provider value={{
      animation,
      handleProject, setHandleProject
    }}>
      <AppRouter />
    </DataContext.Provider>
    {/* <BackgroundAnimation /> */}
    </>
  )
}
