import React, { useContext } from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { AiFillEye as LiveIcon } from 'react-icons/ai';
import { SiGithub as GithubIcon, SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, } from 'react-icons/si';
import { ListTechnologies } from './ListTechnologies';
import { ProjectLinks } from './ProjectLinks';
import { ProjectDescription } from './ProjectDescription';
import { MainProjectImage } from './MainProjectImage';
import { ProjectGallery } from './ProjectGallery';
import { DataContext } from '../../context/dataContext';

export const Project = ({ handleOpenContent }) => {
  // debugger
  const { handleProject: { name } } = useContext(DataContext)
  return (
    <div className="modal fade--in">
      <CloseIcon 
        className="close--icon"
        onClick={ handleOpenContent }
      />
      <div className="layout">
      </div>
        <div className="modal__project">
          {/* <ReactIcon className="react--icon lg--icon"/> */}
        <MainProjectImage />
        <h2 className="titles">{ name }</h2>
        <ListTechnologies />
        <ProjectDescription />
        <ProjectLinks />
        <ProjectGallery />
        
        </div>
    </div>
  )
}
