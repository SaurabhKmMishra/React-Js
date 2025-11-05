import { useState } from 'react'
import './App.css'

/* :> We wants to make a counter which should be only changeable in range 0-20(both inclusive) as per counting values. */


/* In React.js, Hooks are special functions that let you use state and other React features in functional components — without writing class components. 

:> They were introduced in React 16.8 and have since become the standard way to manage logic, state, and side effects in React.*/


function App() {
  
  let [counter,setCounter] = useState(10) // useState() is a hook
  
  // here, counter is the variable while the setCounter is the fun. responsible for it's updation, and these names may be different.
  // also '10' in the useState rep. the default value of the var counter.

  //let counter = 15

  const addValue = () => {

    // counter = counter + 1; 
    //  setCounter(counter)

            // Or
    
    // setCounter(counter+1) // another mthd


         // but to provide range

    if(counter+1 > 20){
      return;
    }
    else setCounter(counter+1)

  }

  const removeValue = () => {
    if(counter-1 < 0){
      return;
    }
    else setCounter(counter-1)
    
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

export default App


