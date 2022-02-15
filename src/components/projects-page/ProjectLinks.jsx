import React, { useContext } from 'react'
import { SiGithub as GithubIcon, SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, } from 'react-icons/si';
import { AiFillEye as LiveIcon } from 'react-icons/ai';
import { DataContext } from '../../context/dataContext';

export const ProjectLinks = () => {
  const { handleProject: {
    link, repository
  } } = useContext(DataContext)
  return (
    <div className="c10 links">
      <a href={ link } target="_blank">
        <LiveIcon className="live--icon"/>
      </a>
      <a href={ repository } target="_blank">
        <GithubIcon className="github--icon"/>
      </a>
    </div>
  )
}
