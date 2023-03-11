import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UseEffectGet = () => {
    const [post,setPost]=useState({});
    const [id,setId]=useState(1);
    const[idFromBut,setIdFromBut]=useState(1);

    useEffect(()=>{
        
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromBut}`)
        .then(res=>{
            console.log(res.data);
            setPost(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[idFromBut])

    return (
    <div>
        <input type="text" value={id} onChange={e=>{setId(e.target.value)}} ></input>
        <button  onClick={()=>{setIdFromBut(id)}} >fetch</button>
        <h1>{post.title}</h1>
    </div>
  )
}

export default UseEffectGet
