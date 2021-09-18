import React from 'react';
import { RiExternalLinkFill as LinkIcon, RiFolderInfoFill as FolderIcon } from 'react-icons/ri'
import { useOpenContent } from '../hooks/useOpenContent';
import { Project } from './Project';

export const ProjectPage = () => {
  const { openContent, handleOpenContent } = useOpenContent(false)
  // debugger
  return (
<>
    <section className="portafolio">
      <div className="c9">
        <h2 className="titles">Portafolio</h2>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon 
              className="folder--icon"
              onClick={ handleOpenContent }
            />
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon 
              className="folder--icon"
              onClick={ handleOpenContent }
            />
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon 
              className="folder--icon"
              onClick={ handleOpenContent }
            />
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon 
              className="folder--icon"
              onClick={ handleOpenContent }
            />
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        <div className="projects c10">
          <h3 className="sub--title">Project name</h3>
          <div className="project__options">
            <FolderIcon 
              className="folder--icon"
              onClick={ handleOpenContent }
            />
            <LinkIcon className="link--icon"/>
          </div>
        </div>
        
      </div>

      
    </section>
    {
      openContent && <Project handleOpenContent={ handleOpenContent }/>
    }
    </>
  )
}
