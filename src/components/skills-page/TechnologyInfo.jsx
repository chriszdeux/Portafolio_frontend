import React from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';
import { CircleBackground } from '../animations/CircleBackground';
import { Link } from 'react-router-dom';

export const TechnologyInfo = ({ values }) => {
  const { handleOpenContent, item } = values;
  const { icon, name, description, url } = item

  return (
    <div className="modal">
      <CloseIcon className="close--icon close--skills" onClick={ handleOpenContent }/>
      <div className="layout">
      </div>
        <div className="modal__project skills__modal animate__animated animate__fadeInUp">
          {
            icon
          }
          <h2 className="titles">{ name }</h2>
          <p className="paragraph">{ description }</p>
          <a href={url} target="_blank">
            <button className="btn btn-primary">Read more about { name }</button>
          </a>
        </div>

        <CircleBackground />
    </div>
  )
}
