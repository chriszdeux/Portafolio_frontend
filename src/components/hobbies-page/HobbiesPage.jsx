import React, { useState } from 'react'

import { CgArrowLeftR as LeftIcon, CgArrowRightR as RightIcon } from 'react-icons/cg';

import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { useOpenContent } from '../hooks/useOpenContent';
import { Hobbie } from './Hobbie';

export const HobbiesPage = () => {
  const { openContent, handleOpenContent } = useOpenContent()
  return (
    <section className="hobbies__section c9">
      <Hobbie />
      <Hobbie />
      <Hobbie />

      {
        openContent &&
          <div className="modal">
            <CloseIcon className="close--icon" onClick={ handleOpenContent }/>
            <div className="layout"></div>
            <div className="modal__hobbies">
              <figure className="hobbie__image c10">
                <img className="hobbie--image" src="" alt="" />
                <div className="slider__controls c10">
                  <LeftIcon className="left--icon" />
                  {/* <h2>{ counter }</h2> */}
                  <RightIcon className="right--icon" />
                  {/* <h3 className="">download</h3> */}
                </div>
              </figure>
            </div>
          </div>
      }
    </section>
  )
}
