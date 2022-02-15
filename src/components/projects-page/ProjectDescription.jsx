import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext'

export const ProjectDescription = () => {
  const { handleProject: { description } } = useContext(DataContext)
  return (
    <>
    <h3 className="sub--title">Description</h3>
    <p className="paragraph">{ description }</p>
    </>
  )
}
