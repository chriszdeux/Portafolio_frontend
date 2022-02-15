import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext'

export const MainProjectImage = () => {
  const { handleProject: {
    main_image, name
  } } = useContext(DataContext)
  return (
    <figure className="project__main__image c10">
      <img className="project--main--image" src={ main_image } alt={ name } />
      {/* <img className="project--screenshot" src="" alt="" /> */}
    </figure>
  )
}
