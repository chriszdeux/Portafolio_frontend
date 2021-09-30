import React, { useState } from 'react'

import { CgArrowLeftR as LeftIcon, CgArrowRightR as RightIcon } from 'react-icons/cg';

import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { useOpenContent } from '../hooks/useOpenContent';
import { Hobbie } from './Hobbie';
import { HobbieGallery } from './HobbieGallery';

export const HobbiesPage = () => {
  const { openContent, handleOpenContent } = useOpenContent()
  return (
    <section className="hobbies__section c9 animate__animated animate__fadeIn">
      <h2 className="titles">Hobbies</h2>
      <Hobbie handleOpenContent={ handleOpenContent } />
      <Hobbie handleOpenContent={ handleOpenContent } />
      <Hobbie handleOpenContent={ handleOpenContent } />

      {
        openContent && <HobbieGallery handleOpenContent={ handleOpenContent }/>
          
      }
    </section>
  )
}
