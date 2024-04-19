import React, { useState } from 'react'

const ButtonClick = () => {
    const [btnClk,setBtnClk]=useState("Click Here");
    
    return (
    <>
    <h1>Use of useState in Button</h1>
    <button className="btn btn-primary mx-2" onClick={()=>{setBtnClk('Clicked')}} onMouseLeave={()=>{setBtnClk('Click Here')}}>{btnClk}</button> 
    </>
  )
}

export default ButtonClick
