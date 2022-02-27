import React from 'react';
import { projects } from '../../data/projectsData';
import { useOpenContent } from '../hooks/useOpenContent';
import { Gallery } from './Gallery';
import { Project } from './Project';
import { ProjectItem } from './ProjectItem';

export const ProjectPage = () => {

  // debugger
  
  return (
    <section className="portfolio c9">
      <h2 className="titles">Portfolio</h2>
      <div className="portfolio__grid c10 fade--in">
        {
          projects.map(item => (
            <ProjectItem key={ item.id } item={ item }  /> 
          ))
        }
      </div>

    
    </section>
  )
}
