import React, { useState } from 'react'

const Bmi = () => {
    const [bmi,setbmi]=useState();
    const [message,setmessage]=useState("");
    const [form,setform]=useState({
        weight:0,
        height:0
    })
    const submit=((e)=>{
        e.preventDefault();
        const {weight,height} = form
       if(weight===0||height===0){
        alert("something wrong")
       }
       else{
        let bmi=(weight/((height*.3048)*(height*.3048)))
        setbmi(bmi.toFixed(1))
        if(bmi<18){
            setmessage("your weight undergone")
        }
        else if(bmi>=18&&bmi<25){
            setmessage("your are  perfect")
        }
        else{
            setmessage("your are over weight")
        }
      
       }

      
       
    })
    const handlef=((e)=>{
        const {name,value} = e.target;
        setform({
            ...form,
            [name]:value
        })
    })
  
    
  return (
   <div className="parent">
    <div className='box'>
        <label className='lab' htmlFor="">Enter weighht</label><br/>
        <input type="number" name="weight" onChange={handlef} placeholder="enter weight" /><br/>
        <label htmlFor="">Enter hheighth</label><br/>
        <input type="number" name="height" onChange={handlef} placeholder="enter weight" /><br/>
        <button type="submit" onClick={submit}>submit</button><br/>
        <div><p>your bmi is :{bmi}</p>
        <p>your weight is : {message}</p></div>
    </div>
   </div>
  )
}

export default Bmi
