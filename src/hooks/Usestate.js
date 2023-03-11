import React, { useState } from 'react'

const Usestate = () => {
    const [name,setName]=useState({firstName:"",lastName:""});
    return (
    <div>
        <form>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}/>
        </form>
        <h1>this is firstName : {name.firstName}</h1>
        <h1>this is lastName : {name.lastName}</h1>
        <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default Usestate
