import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



// remember <></> is a ' React fragment'.

/* 🧩 What is a Fragment?

A Fragment is a special React wrapper that lets you group multiple elements without adding an extra DOM node (like a <div>).

In JSX, every component must return a single parent element — and sometimes you don’t want to wrap everything in an unnecessary <div>.

That’s where fragments come in.   

🧩 What Are Props?

Props (short for “properties”) are a way to pass data from a parent component to a child component in React.

They make components reusable and dynamic — instead of hardcoding content, you can pass values in.

🧠 Think of Props Like Function Parameters

React components are basically JavaScript functions —
so props are like arguments passed to those functions.

*/


// let's assume we wants to have many cards but with different info, that's where the props comes into role.





                   

function App() {

                  // Understanding tailwind

  const [count, setCount] = useState(0)

  let myObj = {
    username: "Saurabh",
    age:21
  }

  let newArr = [2,3,5]

  //below is the method to use tailwind with jsx and also to pass props well known asproperties.

  return (
    <> 

    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    

    {/* <Card channel='chai aur code' someObj = {newArr}/> */}
    
    <Card username='chai aur code' btnTxt='click me'/>
    <Card username='life living' btnTxt='visit me'/>

    </>
  )
}

export default App
