import React from 'react'
import { CgArrowLeftR as LeftIcon, CgArrowRightR as RightIcon } from 'react-icons/cg';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';

export const HobbieGallery = ({ handleOpenContent }) => {
  return (
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
  )
}
