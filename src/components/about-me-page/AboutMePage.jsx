import React from 'react'
import { AboutMeInfo } from './AboutMeInfo'
import { MainSectionAboutMe } from './MainSectionAboutMe'

export const AboutMePage = () => {
  return (
    <section className="about__me__page c10 fade--in">
      <MainSectionAboutMe />

      <AboutMeInfo />
    </section>
  )
}
