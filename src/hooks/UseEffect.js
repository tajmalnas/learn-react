import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const coord=(e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("worked");
        window.addEventListener('mousemove',coord)
    },[])
  return (
    <div style={{display:'flex',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
        <h1>x:{x}   y:{y}</h1>    
    </div>
  )
}

export default UseEffect
