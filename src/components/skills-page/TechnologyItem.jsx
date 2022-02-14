import React from 'react';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';
import { useOpenContent } from '../hooks/useOpenContent';
import { TechnologyInfo } from './TechnologyInfo';


export const TechnologyItem = ({ item }) => {
  const { openContent, handleOpenContent, data } = useOpenContent();
  // const { handleOpenContent, item } = values;
  const { icon, name, description, url } = item
  return (
  <>  
    <div className="skill__item" onClick={ handleOpenContent }>
      {
        icon
      }
      <h3 className="technology--name" >{ name }</h3>
    </div>

    {
      openContent && <TechnologyInfo values={{ handleOpenContent, item }} />
        
    }
</>
  )
}
