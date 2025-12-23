import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo,setEditing,updateTodo} from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const {todos, editingId} = useSelector(state => state) // selects the whole Redux state and immediately destructures todos and editingId from it.

    const submitHandler = (e) => {
        e.preventDefault()

        if(!input.trim()) return; // if their is nothing valid in input

        if(editingId){
            dispatch( updateTodo( {id:editingId, text:input} ) )
        } else{
            dispatch(addTodo(input))
        }    
           
        setInput('') // we cleaned the i/p field  after storing it.

    }

    // earlier their was a need to use action.payload in the reducer inside dispatch for the store, but later you can directly sent whatever you wana send. It is sent in payload by it's own.  

    // this avoids unnecessary boiler plate code.



                  // when editingId changes, fill input
    useEffect(() => {
        if(editingId){
            const todo = todos.find(todo => todo.id === editingId)
            if(todo) setInput(todo.text)
        }

    },[todos,editingId])





    return (
        <form onSubmit={submitHandler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        <button type="submit" className={`rounded-r-lg px-3 py-1 ${editingId ? 'bg-blue-700':'bg-green-600'} text-white shrink-0`}>
            {editingId ? 'Update Todo' : 'Add Todo' }
        </button>
        </form>
    )
}

export default AddTodo


/*

   :> Remember adding todo means storing something in store viz. done using dispatching some event.

   :> *IMP:>  Also remember that dispatch using a reducer stores/changes the values in the Store. 

   :> also, the reducer needs to be called inside dispatch.

   :> so the whole picture is we made a dispatch and then can call a reducer init and can pass a value which can be accessed using action.payload object.

   :> Also, remember that useSelector() is a method, with access to state in a callback.
 
*/





