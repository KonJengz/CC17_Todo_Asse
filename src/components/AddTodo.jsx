import { useState } from "react"


export default function AddTodo({ addTodoList }) {

    const [textTodo, setTextTodo] = useState({
        title: '',
        status: false
    })

    const handleChangeTask = (e) => {
        setTextTodo((prev) => ({...prev,'title': e.target.value}))
    }

    const handleClickAdd = () => {
        addTodoList(textTodo)
        setTextTodo('')
    }

  return (
    <div className='todo_add'>
        <input onChange={handleChangeTask}
            type="text"
            placeholder="New task"
            value={textTodo.title}
        />
        <button onClick={handleClickAdd} className='btn_add'>add</button>
    </div>
  )
}
