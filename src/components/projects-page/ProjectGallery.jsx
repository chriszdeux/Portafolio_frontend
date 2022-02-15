import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext'
import { GalleryScreenshot } from './GalleryScreenshot'

export const ProjectGallery = () => {
  const { handleProject: {
    gallery
  } } = useContext(DataContext)
  return (
    <div className="project__gallery c10">
      {
        gallery.map(({image}) => (
          <GalleryScreenshot key={ image } image={ image }/>
        ))
      }
    </div>
  )
}
