import React, { useContext, useEffect, useState } from 'react'
import { BackgroundAnimation } from './components/animations/BackgroundAnimation';
import { Header } from './components/header/Header'
import { useOpenContent } from './components/hooks/useOpenContent';
import { MainPage } from './components/main-page/MainPage';
import { AppRouter } from './components/router/AppRouter';
import { animationEffect } from './components/utils/animation';
import { DataContext } from './context/dataContext';

import './styles/styles.css';
export const Portfolio = () => {
  const [animation, setAnimation] = useState(animationEffect)
  const [handleProject, setHandleProject] = useState({})
  const { openContent, handleOpenContent } = useOpenContent()
  // useEffect(() => {
  //   setAnimation(animationEffect)
  // }, [])
  // debugger
  
  return (
    <>
    <DataContext.Provider value={{
      animation,
      handleProject, setHandleProject,
      openContent, handleOpenContent
    }}>
      <AppRouter />
    </DataContext.Provider>
    {/* <BackgroundAnimation /> */}
    </>
  )
}
