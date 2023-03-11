import React, { useReducer } from 'react'

const intitalState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'incr':
            return state+1;
        case 'decr':
            return state-1;
        case 'reset':return intitalState;
        default :return intitalState;
    }
}

const UseReducer = () => {

    const [count,dispatch]=useReducer(reducer,intitalState);
    const [countTwo,dispatchTwo]=useReducer(reducer,intitalState);
    if(count===10){
        dispatch('reset');
    }

  return (
    <div>
      <h1>count 1 : {count}</h1>
      <button onClick={()=>{dispatch('incr')}}>Increment</button>
      <button onClick={()=>{dispatch('decr')}}>Decrement</button>
      <button onClick={()=>{dispatch('reset')}}>Reset</button>

      <h1>count 2 : {countTwo}</h1>
      <button onClick={()=>{dispatchTwo('incr')}}>Increment</button>
      <button onClick={()=>{dispatchTwo('decr')}}>Decrement</button>
      <button onClick={()=>{dispatchTwo('reset')}}>Reset</button>
    </div>
  )
}

export default UseReducer
