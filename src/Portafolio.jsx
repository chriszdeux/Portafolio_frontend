import React, { useContext, useEffect, useState } from 'react'
import { Header } from './components/header/Header'
import { MainPage } from './components/main-page/MainPage';
import { AppRouter } from './components/router/AppRouter';
import { animationEffect } from './components/utils/animation';
import { DataContext } from './context/dataContext';

import './styles/styles.css';
export const Portafolio = () => {
  const [animation, setAnimation] = useState(animationEffect)
  // useEffect(() => {
  //   setAnimation(animationEffect)
  // }, [])
  // debugger
  return (
    <>
    <DataContext.Provider value={{
      animation
    }}>
      <AppRouter />
    </DataContext.Provider>
    </>
  )
}
