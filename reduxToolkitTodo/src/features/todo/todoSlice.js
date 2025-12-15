import {createSlice, nanoid} from '@reduxjs/toolkit'

// 'nanoid' is a method which generates unique ids.

const initialState = {
    todos: [{id:1, text:"Hello world"}]
}

// the initialState can be an empty array/obj or anything you want, it determines how will be the 