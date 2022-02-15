import React, { useContext } from 'react'
import { RiExternalLinkFill as LinkIcon, RiFolderInfoFill as FolderIcon } from 'react-icons/ri'
import { DataContext } from '../../context/dataContext'
import { icons } from '../../data/icons'
import { FadeBottom } from '../fade/FadeBottom'


export const ProjectItem = ({ values }) => {
  const { item, handleOpenContent } = values
  const { name, link, main_image, technologies, repository, description } = item; 
  // debugger
  const { link_icon, github_icon, live_icon } = icons
  const { setHandleProject } = useContext(DataContext)
  const handleItemProject = () => {
    setHandleProject(item)
    handleOpenContent()
  }
  return (
    <div className="projects c10" >
      
      <figure className='project__background'>
        <img src={ main_image } alt={ name } />
        <FadeBottom />
      </figure>
        <h2>{ name }</h2>
      <div className='project__info'>
        <ul className='project__technologies'>
          {
            technologies.map(item => (
              <li style={{color: `${item.color}`}}>{ item.icon } <span>{ item.name }</span> </li>
            ))
          }
        </ul>
        <ul className='projects__links'>
          <a href={ link } target="_blank" rel='noreferrer'>
            <li className='icon--link'>{ live_icon }</li>
          </a>
          <a href={ repository } target="_blank" rel='noreferrer'>
            <li className='icon--link'>{ github_icon }</li>
          </a>
        </ul>
      </div>
      <div className="project__description">
          <h2>Description</h2>
          <p>{ description }</p>
      </div>
      <h2 className='to--gallery'>Gallery</h2>
      {/* <h3 className="project--sub--title">{ name }</h3>
      <div className="project__options fade--in" style={{ animationDelay: '.3s' }}>
        <div onClick={ handleItemProject }>
          { folder_icon }
        </div>
        <a href={ link } target="_blank" rel="noreferrer">
          { link_icon }
        </a>
      </div> */}
    </div>
  )
}
