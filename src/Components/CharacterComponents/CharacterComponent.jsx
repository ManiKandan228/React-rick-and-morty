import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CharacterComponent.css'
import CharactersComponent from '../CharactersComponent/CharactersComponent'

const CharacterComponent = () => {
  const [userData, setUserData] = useState({})
  const [pageNumber,setPageNumber]=useState(1)
  const getData = async() => 
  {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
      console.log(response.data)
      setUserData(response.data)
  }
  useEffect(()=>{
    getData()
  },[pageNumber])

  const moveToPrevious=()=>{
    setPageNumber((oldPageNumber)=>oldPageNumber-1)
  }
  const moveToNext=()=>{
    setPageNumber((oldPageNumber)=>oldPageNumber+1)
  }
return (
  <React.Fragment>
    <div className='Header'>
      <p>Rick and Morty</p>
    </div>
    <div>
      <ul className='container'>
        {userData.results && userData.results.map ((iterator) => (
          <CharactersComponent iterator={iterator}/>
        ))}
      </ul>
      </div>
      <div >
      <button 
        disabled ={pageNumber===1} 
        id='button1'
        onClick={moveToPrevious}>
          Prev
      </button>
      <button
          disabled ={userData.info && userData.info.next===null} 
          id='button2'
          onClick={moveToNext}>
            
          Next
      </button>
      </div>
  </React.Fragment>
)
}


export default CharacterComponent