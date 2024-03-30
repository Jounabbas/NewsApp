import { useState } from "react"
import React from 'react'
 
export default function Text(props) {
  const uppercase=()=>{
    
    setText(text.toLocaleUpperCase())
    if (text==="") {
      props.showalert("coul'd convert to upper case","danger")
    }
    else{
      props.showalert("convert to upper case","succes")
     
    }
   
  }
  const lowercase=()=>{
    setText(text.toLowerCase())
    if (text==="") {
      props.showalert("coul'd convert to lower case","danger")
    }
    else{
      props.showalert("convert to lower case","succes")
      
    }
  }
  const changehandler=(e)=>{
    setText(e.target.value)
  }
  const clearText=()=>{
    setText("")
    if (text==="") {
      props.showalert("text is already clear","danger")
    }
    else{
      props.showalert("clear text","succes")
     
    }
  }
  const copyText=()=>{
   const text=document.getElementById("txt");
    text.select();
    
    navigator.clipboard.writeText(text.value);
    // this method is use to copy text but not selectd text
    document.getSelection().removeAllRanges();
    if (text==="") {
      props.showalert("no text can be copy only empty string copr","danger")
    }
    else{
      props.showalert("text copy on clipboard","succes")
      
    }
  }
  const removespace=()=>{
   let newtext=text.split(/[ ]+/);
   setText(newtext.join(" "))
   if (text==="") {
    props.showalert("coul'd remove extra spaces","danger")
   }
   else{
     props.showalert("remove extra spaces","succes")
   }
  }

  const [text,setText]=useState("")
  return (
    <>
        <div className="mb-3">
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>{props.heading}</h3>
    <textarea className={`form-control text-${props.mode==="dark"?"dark":"dark"} `} style={{backgroundColor:props.mode==="dark"?"lightgray":"white"}} value={text} onChange={changehandler}  id="txt" rows="4"></textarea>
   
  <button className="btn btn-primary my-3" disabled={text.length===0} onClick={uppercase}>UPPERCASE</button>
  <button className="btn btn-primary my-3 mx-2" onClick={lowercase}>Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={clearText}>clearText</button>
  <button className="btn btn-primary my-3 mx-2" onClick={copyText}>copy Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={removespace}>Remove extra space</button>
  </div>
  <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Text Preview</h3>
  <p className={`text-${props.mode==="dark"?"light":"dark"}`}>total word is {text.split(" ").filter((e)=>{ return e.length!=0}).length} and the total length is {text.length}</p>

  <p  className={`text-${props.mode==="dark"?"light":"dark"}`}>total mint to read {.008*text.split(" ").filter((e)=>{ return e.length!==0}).length}</p>


  <p className={`text-${props.mode==="dark"?"light":"dark"}`}>the total sentance is {--text.split(".").length}</p>
  <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Text Summary</h2>

  <p>{text}</p>
    </>
  )
}
