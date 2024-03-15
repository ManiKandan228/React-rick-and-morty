import React from 'react'

const CharactersComponent = ({iterator}) => {
  return (
    <li key={iterator.id} className='content-alignment'>
            <div className='image-container'>
              <img src={iterator.image} alt="" />
            </div>
            <div className='text-container'>
              <p>{iterator.name}</p>
              <p>{iterator.status} - {iterator.species}</p>
              <p style={{color: "#B4B4B8"}}>last seen on</p>
              <p>{iterator.location.name}</p>
            </div>
          </li>
  )
}

export default CharactersComponent