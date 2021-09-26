import React from 'react'
import { HobbieInfo } from './HobbieInfo'

export const Hobbie = ({ handleOpenContent }) => {
  return (
    <div className="hobbie c10">
      <HobbieInfo handleOpenContent={ handleOpenContent }/>
      <div className="hobbie__aside c10">
        <figure className="image__aside">
          <img  className="image--aside" src="" alt="" />
        </figure>
      </div>
    </div>
  )
}
