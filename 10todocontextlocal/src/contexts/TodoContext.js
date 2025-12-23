
import { createContext, useContext } from "react";

/* :> You do not import Provider separately from React.

    :> When you call createContext, it returns a context object, and that object already contains the Provider (and Consumer).
    

    :> Comparing this from rtk: The Provider does not come from RTK or the store.

    :> You must import it from react-redux.
*/


export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        },
    ],
    addTodo: (todo) => {}, 
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},


});


export const TodoProvider = TodoContext.Provider


export const useTodo = () => {
    
    return useContext(TodoContext)
    
}      


