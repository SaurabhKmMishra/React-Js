import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {

  // all todos are in this state
  const [todos, setTodos] = useState([])
  
  // working of methods
  const addTodo = (todo) => {
    setTodos((prev)=> [{id: Date.now(), ...todo}, ...prev])

    // above we can see that a new obj. is added in the todos array present above along with a unique id and it's keys as spreaded. Also, after it the pre stored todos were also added at the very end.

    // this is b/c we got a callback in SetTodos which provided an array of all todos stored before.

  }

  const updateTodo = (id, todo)=> {
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo ) ))

  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        (prevTodo.id === id ? { ...prevTodo,
          completed: !prevTodo.completed} : prevTodo))) 
  }

/*

  :> Above we needed to find which todo is matching with the 'id' so we can update it. 
  
  :> we also know that we got a callback which has all previous states of the array.

  :> So, we mapped over the array of todos and updated that todo whose id matched.

  :> else we tried to put it's value same in case the id didn't matched.

*/  

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

// Above we are using filter to remove the actual todo to be deleted.


          // Implementation of local storage

  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"))

    // JSON.parse() is a built-in JavaScript method used to convert a JSON formatted string into a JavaScript object.
    
    if(todos && todos.length > 0){
      setTodos(todos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])




  return (
    // remember here the TodoProvider provides method values which are destructured using {}

    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 className='text-3xl'>
          <div className="bg-[#172842] min-h-screen py-18">
              <div className="w-full max-w-4xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                  <h1 className="text-4xl font-bold text-center mb-20 mt-2">Manage Your Todos</h1>
                  <div className="mb-5">
                      {/* Todo form goes here */} 
                      <TodoForm/>
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}
                      {todos.map((todo) => (
                        <div key={todo.id}
                        className="w-full">
                          <TodoItem todo={todo}/>
                        </div>
                      ))}
                  </div>
              </div>
          </div>
      </h1>
    </TodoProvider>
  )
}


export default App


