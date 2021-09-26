import React from 'react';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';


export const TechnologyItem = ({ handleOpenContent }) => {
  return (
    <div className="skill__item" onClick={ handleOpenContent }>
      <ReactIcon className="react--icon lg--icon"/>
      <h3 className="technology--name" >name technology</h3>
    </div>
  )
}
