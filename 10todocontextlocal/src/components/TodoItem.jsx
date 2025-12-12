import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {

    
    
    const {updateTodo, deleteTodo, toggleComplete } = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo) // todo item of a single todo item

/* 
    
    ✅1. { ... } → Object destructuring :- Used when the value you're unpacking is an object.
    
    :> Here, useTodo is an object and we pick specific keys from it using {}.
    
    ✅2. [ ... ] → Array destructuring :- Used when the value you're unpacking is an array.

    :> React useState() returns an array viz: [ stateValue, setStateFn ]
       So you use [] to extract them in order.


*/

                    // defining the functionalities/Methods
    
    const editTodo = () => {

        updateTodo(todo.id, {...todo, todo: todoMsg}) 
        // {...todo, todo: todoMsg} creates a new object by copying all properties of todo and then adding or replacing the todo field with todoMsg.       
        
        setIsTodoEditable(false) // we are done with editing now make the isTodoEditable state false.

    }              
    
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (

        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg  ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through " : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>

    );
}

export default TodoItem;






