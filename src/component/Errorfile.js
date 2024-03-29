import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errorfile = () => {
  const navigate=useNavigate()
  
  return (
    <div className='error_file'>
     <h3 style={{color:"red"}}>SORY THIS PAGE CAN NOT BE FOUND</h3>
     <button onClick={()=>navigate("/")} style={{fontWeight:"bold"}}>Go Back</button>
    </div>
  )
}

export default Errorfile
