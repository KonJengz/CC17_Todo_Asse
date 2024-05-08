import { createContext, useEffect, useState } from 'react';
import * as userAPI from '../apis/apiTodo';
import axios from 'axios';

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {

    const [allTodo, setAllTodo] = useState([])

    useEffect(() => {
        allTodoList()
    }, [])


    // GET All Todo
    const allTodoList = async () => {
        try {
            const res = await userAPI.getAllTodo()
            setAllTodo(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Add Todo
    const addTodoList = async (data) => {
        try {
            const res = await userAPI.createTodo(data)
            setAllTodo([res.data.data, ...allTodo])
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTodoList = async (id) => {
        try {
            const res = await axios.delete(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=43`)
            setAllTodo((prev) => prev.filter((todo) => todo.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    return <TodoContext.Provider value={{ allTodo, addTodoList, deleteTodoList }}>{ children }</TodoContext.Provider>
}