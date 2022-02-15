import React from 'react';
import { projects } from '../../data/projectsData';
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
        {
          projects.map(item => (
            <ProjectItem key={ item.id } values={{ item, handleOpenContent }}  /> 
          ))
        }
      </div>

      
    </section>
    {
      openContent && <Project handleOpenContent={ handleOpenContent }/>
    }
    </>
  )
}
