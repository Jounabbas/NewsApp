import React, { useContext } from 'react'
import { appcontext } from '../context/context'

const Search = () => {
  const {query,setquery}=useContext(appcontext);
 
  const serhandle=(e)=>{
     if(e.target.value===""){
      setquery("lovely")
     }
     else{
      setquery(e.target.value)
     }
  }
  return (
    <div >
      <input type="search" name="" id="search" onChange={serhandle} placeholder='Search here' />
    </div>
  )
}

export default Search
