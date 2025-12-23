import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

/*
   :> Question? Why does their is a variation in importing like above :-

        Reason depends only on how the module exports the value.

        Rule (no exceptions)

        With {} → import a named export i.e, You must use {} and the exact name.

        Without {} → import the default export i.e, You can name it anything

    :>  So, {} means “give me this exact named thing”
        no {} means “give me the module’s default thing”

    :> Remember adding todo means storing something in store viz. done using dispatching some event.

    :> *IMP:>  Also remember that dispatch using a reducer stores/changes the values in the Store.     

*/