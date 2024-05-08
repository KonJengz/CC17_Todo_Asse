import './contentCard.css'
import TodoIItem from '../components/TodoItem'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import AddTodo from '../components/AddTodo'


export default function MyTodo() {
  const { allTodo , addTodoList, deleteTodoList } = useContext(TodoContext)
  console.log(allTodo)
  return (
    <div className="container_content">
        <div className='card_content'>

            <AddTodo addTodoList={addTodoList} />

            { allTodo.length > 0 && allTodo.map((todo) => (
              <TodoIItem key={todo.id} todo={todo} deleteTodoList={deleteTodoList} />
            ))}
            
        </div>
    </div>
  )
}
