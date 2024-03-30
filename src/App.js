
import './App.css';
import About from './componant/About';
import Alert from './componant/Alert';
import Navebar from './componant/Navebar';
import Text from './componant/Text';
import React, { useState } from 'react'

import { BrowserRouter as Main,Route,Routes } from "react-router-dom";



function App() {
  const [mode,setmode]=useState("light")
  const [alert,setalert]=useState("")

 
   
  
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
     
    })
    setTimeout(() => {
        setalert("")
    }, 1500);
  }
  
  const toglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      
      document.body.style.backgroundColor="gray"
      showalert("enable dark mode","succes")
    }
    else{
      setmode("light");
     
      document.body.style.backgroundColor="white"
      showalert("light mode","succes")
    }
    
  }
  return (
    
    <>  
   <Main>
    <Navebar  title="Textutiliti" home="home" mode={mode} togle={toglemode}  />
    <Alert alert={alert}/>
  <div className="container my-3">
          <Routes>
          <Route exect path ="/" element={<Text showalert={showalert} heading="Try Text Utils Word Counter Character Counter Remove Extra Spaces" mode={mode}  />}/>
          <Route exect path="/about" element={<About  mode={mode}/>}/>
          </Routes>
     </div>
    
     </Main>
    </>
  );
} 

export default App;
