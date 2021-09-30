import React from 'react'
import { RiExternalLinkFill as LinkIcon, RiFolderInfoFill as FolderIcon } from 'react-icons/ri'


export const ProjectItem = ({ handleOpenContent }) => {
  return (
    <div className="projects c10">
      <h3 className="project--sub--title">Project name</h3>
      <div className="project__options fade--in" style={{ animationDelay: '.3s' }}>
        <FolderIcon 
          className="folder--icon"
          onClick={ handleOpenContent }
        />
        <LinkIcon className="link--icon"/>
      </div>
    </div>
  )
}
