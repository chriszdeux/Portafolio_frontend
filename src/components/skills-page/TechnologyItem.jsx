import React from 'react';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';
import { useOpenContent } from '../hooks/useOpenContent';
import { TechnologyInfo } from './TechnologyInfo';


export const TechnologyItem = ({ item }) => {
  const { openContent, handleOpenContent, data } = useOpenContent();
  // const { handleOpenContent, item } = values;
  const { icon, name, description, url, color } = item
  return (
  <>  
    <div className="skill__item" >
    {/* <div className="skill__item" onClick={ handleOpenContent }> */}
      <div className='skill--icon' style={{ color:`${ color }` }}>
        { icon }
      </div>
      <h3 className="technology--name" >{ name }</h3>
    </div>

    {
      openContent && <TechnologyInfo values={{ handleOpenContent, item }} />
        
    }
</>
  )
}
