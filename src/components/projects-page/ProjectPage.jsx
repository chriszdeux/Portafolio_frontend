import React from 'react';
import { RiExternalLinkFill as LinkIcon, RiFolderInfoFill as FolderIcon } from 'react-icons/ri'
import { Project } from './Project';

export const ProjectPage = () => {
  return (
<>
    <section className="portafolio">
      <div className="c9">
        <h2 className="titles">Portafolio</h2>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon className="folder--icon"/>
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon className="folder--icon"/>
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon className="folder--icon"/>
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options c2">
            <FolderIcon className="folder--icon"/>
            <LinkIcon className="link--icon"/>
          </div>
        </div>
      </div>

      
    </section>
      <Project />
    </>
  )
}
