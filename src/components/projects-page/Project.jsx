import React from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { AiFillEye as LiveIcon } from 'react-icons/ai';
import { SiGithub as GithubIcon, SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, } from 'react-icons/si';

export const Project = ({ handleOpenContent }) => {
  // debugger
  return (
    <div className="modal">
      <CloseIcon 
        className="close--icon"
        onClick={ handleOpenContent }
      />
      <div className="layout">
      </div>
        <div className="modal__project">
          {/* <ReactIcon className="react--icon lg--icon"/> */}
          <figure className="project__image c10">
            <img className="project--image" src="https://monitoreducativo.com/wp-content/uploads/2020/04/moe-0038_1200x675-768x432.png" alt="" />
            {/* <img className="project--image" src="" alt="" /> */}
          </figure>
        <h2 className="titles">Project name</h2>
        <ul className="technologies">
          <li className="technologies--item"><ReactIcon className="react--icon"/></li>
          <li className="technologies--item"><SassIcon className="sass--icon"/></li>
          <li className="technologies--item"><HtmlIcon className="html--icon"/></li>
        </ul>
        <h3 className="sub--title">description</h3>
        <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed unde sequi molestias, voluptatum ullam alias, quaerat aliquam dolorem delectus inventore suscipit architecto animi itaque veritatis laboriosam minus praesentium tenetur. Porro?</p>
        <div className="c10 links">
          <LiveIcon className="live--icon"/>
          <GithubIcon className="github--icon"/>
        </div>

        <div className="project__gallery c10">
          <figure className="project__image">
            <img className="project--image" src="" alt="" />
          </figure>
          <figure className="project__image">
            <img className="project--image" src="" alt="" />
          </figure>
          <figure className="project__image">
            <img className="project--image" src="" alt="" />
          </figure>
        </div>
        </div>
    </div>
  )
}
