import { useState } from 'react';
import { useTodo } from '../contexts';


function TodoForm() {
   
    // defining state for an individual todo
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 
        
        addTodo({todo, completed:false}) 
        // remember above we didn't gave id:Date.Now() cause it is already in App.jsx also todo:todo in new syntax could be written as just todo.

        setTodo("") // we made empty the field which was bringing the individual todo, for the next time.
  
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm



