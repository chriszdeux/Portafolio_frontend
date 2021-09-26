import React from 'react'
import { SiGithub as GithubIcon, SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, } from 'react-icons/si';

export const ListTechnologies = () => {
  return (
    <ul className="technologies">
      <li className="technologies--item"><ReactIcon className="react--icon"/></li>
      <li className="technologies--item"><SassIcon className="sass--icon"/></li>
      <li className="technologies--item"><HtmlIcon className="html--icon"/></li>
    </ul>
  )
}
