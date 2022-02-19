import React, { useState } from 'react'
import { icons } from '../../data/icons'

export const Gallery = ({ values }) => {
  const { handleOpenContent, gallery } = values
  const { close_icon, left_icon, right_icon } = icons
  const [currentPosition, setCurrentPosition] = useState(0)
  const [animation, setAnimation] = useState('')


  const handlePrevPosition = ( current ) => {
    if(current === 0) {
      setCurrentPosition( gallery.length - 1 )
        setAnimation('animate__animated animate__fadeIn')
        setTimeout(() => {
          setAnimation('')
        }, 1000);
      } else {
        setCurrentPosition( current - 1 )
        setAnimation('animate__animated animate__fadeIn')
        setTimeout(() => {
          setAnimation('')
        }, 1000);
       }  
  }

  const handleNextPosition = ( current ) => {
    if(current === gallery.length - 1) {
      setCurrentPosition( 0 )
        setAnimation('animate__animated animate__fadeIn')
        setTimeout(() => {
          setAnimation('')
        }, 700);
      } else {
        setCurrentPosition( current + 1 )
        setAnimation('animate__animated animate__fadeIn')
        setTimeout(() => {
          setAnimation('')
        }, 700);
       }  
  }
  // debugger
  return (
    <div className='gallery animate__animated animate__fadeIn'>
      <div className='close' onClick={ handleOpenContent }>
        { close_icon }
      </div>
      <div className='gallery--layout'></div>
      <figure className={`screenshot `}>
        <img className={` ${ animation } `} src={ gallery[currentPosition].image } alt={ gallery[currentPosition].image } />
      </figure>
      <div className='prev' onClick={ () => handlePrevPosition(currentPosition) }>
        { left_icon }
      </div>
      <div className='next' onClick={ () => handleNextPosition( currentPosition ) }>
        { right_icon }
      </div>
    </div>
  )
}
