import { useEffect, useState } from "react"

export const useCarrousel = (data, timer) => {
  // const [currentImage, setCurrentImage] = useState('')
  const [currentPosition, setCurrentPosition] = useState(0);
  const [animation, setAnimation] = useState('')
  // debugger
  const myInterval = timer * 1000
  useEffect(() => {

    setAnimation('animate__animated animate__fadeIn')

    const imageInterval = setInterval(() => {
      // setCurrentImage
      // debugger
      setAnimation('animate__animated animate__fadeOut')
      if(currentPosition === data.length - 1) {
        setCurrentPosition(0)
        setAnimation('animate__animated animate__fadeIn')
        setTimeout(() => {
          setAnimation('')
        }, 2500);
      } else {
        setCurrentPosition( currentPosition + 1 )
        setAnimation('animate__animated animate__fadeIn')
        setTimeout(() => {
          setAnimation('')
        }, 2500);
        
      } 
      // setCurrentPosition(currentPosition + 1)
    }, myInterval);

    return () => {
      clearInterval(imageInterval)
    }
  }, [ currentPosition ])

  return {currentPosition, animation}

}