import React from 'react';
import { useOpenContent } from '../hooks/useOpenContent';
import { Project } from './Project';
import { ProjectItem } from './ProjectItem';

export const ProjectPage = () => {
  const { openContent, handleOpenContent } = useOpenContent(false)
  // debugger
  return (
<>
    <section className="portafolio c9">
      <h2 className="titles">Portafolio</h2>
      <div className="portafolio__grid c10 fade--in">
        <ProjectItem  handleOpenContent={ handleOpenContent } /> 
      </div>

      
    </section>
    {
      openContent && <Project handleOpenContent={ handleOpenContent }/>
    }
    </>
  )
}
