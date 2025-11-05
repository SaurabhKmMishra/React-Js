import { useState } from 'react'
import './App.css'

function CounterApp() {
  
  let [counter,setCounter] = useState(10) // useState() is a hook

  const addValue = () => {
    
    // Suppose we duplicated the increment method 5 times: 

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    /* 👇what will be the o/p if we one time press the add value btn??
    
       🧠Ans: it will only increment with a single digit b/c useState() does not update the state immediately. Instead, React batches multiple state updates for performance reasons — especially those triggered inside the same event handler (like addValue() function here).

       :> So what to do now if we wants it to work accordingly????👇

       🧩 If we want each update to see the latest state value, we should pass a function to setCounter().💡 React will call this function with the most recent state value as the argument of that function, even within the same batch.
    
    */


    setCounter(prevCounter => prevCounter + 1) 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)


    /* 🎯The prevCounter is the argument of the callback function passed to setCounter().
    
    ✅React automatically supplies it after fetching with the latest state value.
    The function then returns the new state value (for example, prevCounter + 1),which React uses to update the state.

    */



}

  const removeValue = () => {
    
    setCounter(counter-1)
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}
      >Remove value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default CounterApp


