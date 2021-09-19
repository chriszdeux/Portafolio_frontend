import React from 'react'

export const Hobbie = ({ handleOpenContent }) => {
  return (
    <div className="hobbie c10">
      <div className="hobbie__info c4">
        <h3 className="titles">what i like?</h3>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sed harum hic consectetur, vero illo nemo tempore aspernatur doloremque in deleniti fugiat, ipsum numquam eos quasi debitis, praesentium magni rerum.</p>
        <button className="btn btn--primary gallery" onClick={ handleOpenContent }>gallery</button>
      </div>
      <div className="hobbie__aside c4">
        <figure className="image__aside">
          <img  className="image--aside" src="" alt="" />
        </figure>
      </div>
    </div>
  )
}
