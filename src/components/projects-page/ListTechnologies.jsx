import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext'

export const ListTechnologies = () => {
  const { handleProject:{
    technologies
  } } = useContext(DataContext) 
  return (
    <ul className="technologies">
      {
        technologies.map(item => (
          <li className="technologies--item">{ item.icon } <span>{ item.name }</span></li>
        ))
      }
    </ul>
  )
}
