import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8) // default val 8
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const [isCopied, setIsCopied] = useState(false)

/*  
   
  🧩 What is useEffect() in React?
 
  :> useCallback() is a React Hook that returns a memoized (cached) version of a function. It helps you avoid unnecessary re-creations of that function every time the component re-renders.

  :> remember in useCallback() hook two things are passed one is 1️⃣the fun. you want to "remember" while the other is 2️⃣an array containing dependencies viz. list of values that the function depends on. When any of these change → a new function is created. to make sure the optimization.

  :> 🚀 Why it’s for optimization

    → Without useCallback, every render creates a new function reference That can cause child components that depend on that function to re-render — even if nothing else changed.

    → useCallback helps prevent that by keeping the function stable across renders until dependencies change.



    🧩 What is useEffect() in React?

  :> useEffect() lets you run side effects in functional components.
    A side effect is any action that happens outside React’s normal rendering flow — like:

    >  Fetching data from an API
    >  Accessing localStorage
    >  Setting up event listeners
    >  Manually updating the DOM
    >  Running timers (setTimeout, setInterval)


    :> Difference: 

    ✅ useCallback() → memoizes a function to prevent it from being recreated on every render.

    > i.e, useCallback() helps prevent unnecessary re-renders by keeping a function’s reference stable across renders — until one of its dependencies changes.

    ✅ useEffect() → runs side effects after the component renders, such as fetching data, setting up event listeners, or updating the DOM.
    OR useEffect() runs the given function again whenever any value in its dependency array changes.
       
    > If the dependency array is empty ([]) → it runs only once (on mount).
    


    🧩 What is useRef() in React?

    useRef() → stores a reference (either of a DOM element or a value) which could be used and this reference doesn’t trigger re-renders when it changes.



*/

  // 🌀Ref hook used and is connected to the password input field in code below for utility
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "()[]{}<>~`!@#$%^&*_+=-|\/"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)
      

  }, [length, numAllowed, charAllowed, setPassword])
  //🌀 dependencies above are for optimization and to keep the function stable and avoid unnecessary re-renders.
  

  //🌸 below fun. makes us Understand how to do Copy to clipboard

  const copyPasswordToClipboard = useCallback(()=> {

    
    // 🌿 useRef() in code above used for working of the below two lines

    passwordRef.current?.select()  // to implement select
    passwordRef.current?.setSelectionRange(0,101) // to set a range for selecting password digits.
    window.navigator.clipboard.writeText(password)


            // to change color of btn when clicked
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000);        

  },[password])  


                // to generate password

  useEffect( () => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  //🌀 dependencies above are to re-run the fun. in case any change/effect found in dependencies.

  
  return (
    <>
      <div className='w-full flex flex-col max-w-md mx-auto shadow-md rounded-lg p-5 my-8 text-[#fd9e81] bg-[#758A93]'>
        <h1 className='text-white text-center text-xl mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden my-4 '>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-2 px-3 bg-amber-50'
          placeholder="Password"
          readOnly
          ref={passwordRef} // reference assigned to the refn. hook
          />
          <button 
          onClick={copyPasswordToClipboard}
          className={`outline-none text-white px-3 py-0.5 shrink-0 ${isCopied ? "bg-green-600" : "bg-blue-700"}`}>
          {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
        


        <div className='flex text-sm gap-x-3 shrink flex-wrap'>
          <div className="flex items-center gap-x-2">
            <input
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>  

          <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={()=> {
            setNumAllowed((prev) => (!prev));
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=> {
            setCharAllowed((prev) => (!prev));
          }}
          />
          <label htmlFor="characterInput">Characters</label>
          </div>          
        </div>



      </div>
    </>
  )
}

export default App
