import React from 'react'
import reactDom from 'react-dom';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { useOpenContent } from '../hooks/useOpenContent';

export const SkillPage = () => {
  const { openContent, handleOpenContent } = useOpenContent()
  return (
    <section className="skills c10">
      <div className="c9">
        <h2 className="skills__title">What I know?</h2>
        <div className="skills__grid c10" >
          <div className="skill__item" onClick={ handleOpenContent }>
            <ReactIcon className="react--icon lg--icon"/>
            <h3 className="technology--name" >name technology</h3>
          </div>
          <div className="skill__item" onClick={ handleOpenContent }>
            <JsIcon className="js--icon lg--icon"/>
            <h3 className="technology--name" >name technology</h3>
          </div>
          <div className="skill__item" onClick={ handleOpenContent }>
            <ReactIcon className="react--icon lg--icon"/>
            <h3 className="technology--name" >name technology</h3>
          </div>
          <div className="skill__item" onClick={ handleOpenContent }>
            <JsIcon className="js--icon lg--icon"/>
            <h3 className="technology--name" >name technology</h3>
          </div>
          <div className="skill__item" onClick={ handleOpenContent }>
            <ReactIcon className="react--icon lg--icon"/>
            <h3 className="technology--name" >name technology</h3>
          </div>
          <div className="skill__item" onClick={ handleOpenContent }>
            <JsIcon className="js--icon lg--icon"/>
            <h3 className="technology--name" >name technology</h3>
          </div>
        </div>
      </div>
      {
        openContent &&
          <div className="modal">
            <CloseIcon className="close--icon close--skills" onClick={ handleOpenContent }/>
            <div className="layout">
            </div>
              <div className="modal__project skills__modal">
                <ReactIcon className="react--icon jb--icon"/>
                <h2 className="titles">React JS</h2>
                <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis corrupti totam quisquam ratione consectetur quos porro cumque id nesciunt incidunt nam necessitatibus veniam natus numquam, non vero recusandae nostrum?, adipisicing elit. Voluptatum, hic.</p>
                <button className="btn btn-primary">Read more</button>
              </div>
          </div>
      }
    </section>
  )
}
