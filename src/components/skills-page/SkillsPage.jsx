import React, { useState } from 'react'
import reactDom from 'react-dom';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { skillsData } from '../../data/skillsData';
import { useOpenContent } from '../hooks/useOpenContent';
import { TechnologyInfo } from './TechnologyInfo';
import { TechnologyItem } from './TechnologyItem';

export const SkillPage = () => {
  const { openContent, handleOpenContent, data } = useOpenContent();
  const [skillData, setSkillData] = useState()
  
  return (
    <section className="skills c10">
      <div className="c9 animate__animated animate__fadeIn">
        <h2 className="skills__title">What I know?</h2>
        <div className="skills__grid c10" >
          <>
          {
            skillsData.map((item, index) => (
              <TechnologyItem  key={ index } item={ item }/>
            ))
          }
          </>

        </div>
      </div>
      
    </section>
  )
}
