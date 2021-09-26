import React from 'react'
import { SiGithub as GithubIcon, SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, } from 'react-icons/si';
import { AiFillEye as LiveIcon } from 'react-icons/ai';

export const ProjectLinks = () => {
  return (
    <div className="c10 links">
      <LiveIcon className="live--icon"/>
      <GithubIcon className="github--icon"/>
    </div>
  )
}
