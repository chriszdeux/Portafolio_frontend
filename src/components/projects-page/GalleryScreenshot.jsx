import React from 'react'

export const GalleryScreenshot = ({image}) => {
  return (
    <figure className="project__screenshot">
      <img className="project--screenshot" src={ image } alt={ image } />
    </figure>
  )
}
