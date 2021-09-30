import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'


export const BackgroundAnimation = () => {
  const [sizes, setSizes] = useState({
    width: '',
    height: '0',
    random_box: 0
  })
  
  useEffect(() => {
    const width = Math.floor(Math.random() * 500) + 100
    // const height = Math.floor(Math.random() * 100) + 1
    
    const interval = setInterval(() => {
      setSizes({
        width: width,
        height: 0,
        random_box: width
      })
    }, 10000);
    return () => {
      clearInterval(interval)
    }
  }, [sizes])
  return (
    <div className="background__animation">
      {/* <canvas className="my--box" width="300" height="200" style={{ border: '1px solid red' }} ></canvas> */}
      {/* <div className="my--box" style={{
        width: `${sizes.width}px`,
        height: `${sizes.height}px`
      }}></div> */}
      <canvas className="line" width={ sizes.width } height={ sizes.height }  ></canvas>
      {/* <canvas className="box" width={sizes.random_box} height={sizes.random_box}></canvas> */}
    </div>
  )
}
