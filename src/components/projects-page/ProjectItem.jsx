import React, { useContext } from 'react'
import { RiExternalLinkFill as LinkIcon, RiFolderInfoFill as FolderIcon } from 'react-icons/ri'
import { DataContext } from '../../context/dataContext'
import { icons } from '../../data/icons'
import { FadeBottom } from '../fade/FadeBottom'
import { useOpenContent } from '../hooks/useOpenContent'
import { Gallery } from './Gallery'


export const ProjectItem = ({ item }) => {
  const { name, link, cover_image, technologies, repository, description, gallery } = item; 
  const { openContent, handleOpenContent } = useOpenContent()
  // debugger
  const { link_icon, github_icon, live_icon } = icons
  const { setHandleProject } = useContext(DataContext)
 
  return (
    <>
    <div className="projects c10" >
      
      <figure className='project__background'>
        <img src={ cover_image } alt={ name } />
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
        
      </div>
      <div className="project__description">
          <h2>Description</h2>
          <p>{ description }</p>
      </div>
      <ul className='projects__links'>
          <a href={ link } target="_blank" rel='noreferrer'>
            <li className='icon--link'>{ live_icon }</li>
          </a>
          <a href={ repository } target="_blank" rel='noreferrer'>
            <li className='icon--link'>{ github_icon }</li>
          </a>
        </ul>
      {/* <h2 className='to--gallery' onClick={ handleOpenContent }>Gallery</h2> */}
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
    {
      openContent &&
      <Gallery values={{ gallery, handleOpenContent }}/>
    }
      </>
  )
}
