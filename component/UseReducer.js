import React, { useReducer, useRef} from 'react'
import {Reducer} from './reducer'

const UseReducer = () => {
    const inputRef = useRef(null)
    const [state, dispatch] = useReducer(Reducer, 1)
    let updateCount = 0

    const onIncrement = () => {
      updateCount = state.count + inputRef.current.value
      console.log(updateCount)
      dispatch({type: 'INCREMENT', payload: updateCount})
    }
    const onDecrement = () => {
      updateCount = state.count - inputRef.current.value
      console.log(updateCount)
      dispatch({type: 'DECREMENT', payload: updateCount})
    }

  return <>
      <div className='reducer-div'>
          <h1>{state}</h1>
          <input ref={inputRef} placeholder='Input Increment value'/>
          <button onClick={onIncrement}> Run + </button>
          <input ref={inputRef} placeholder='Input Decrement value'/>
          <button onClick={onDecrement}> Run - </button>                
      </div>
    </>
}

export default UseReducer