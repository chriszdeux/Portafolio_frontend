import React from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';

export const TechnologyInfo = ({ handleOpenContent }) => {
  return (
    <div className="modal">
      <CloseIcon className="close--icon close--skills" onClick={ handleOpenContent }/>
      <div className="layout">
      </div>
        <div className="modal__project skills__modal animate__animated animate__fadeInUp">
          <ReactIcon className="react--icon jb--icon"/>
          <h2 className="titles">React JS</h2>
          <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis corrupti totam quisquam ratione consectetur quos porro cumque id nesciunt incidunt nam necessitatibus veniam natus numquam, non vero recusandae nostrum?, adipisicing elit. Voluptatum, hic.</p>
          <button className="btn btn-primary">Read more</button>
        </div>
    </div>
  )
}
