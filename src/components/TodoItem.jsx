

export default function todoItem({ todo, deleteTodoList }) {

  const handleClickdelete = () => {
    deleteTodoList(todo.id)
  }
  return (
    <div className="todo_item">
      <div className="checkbox_item">
        <input className="input_checkbox" type="checkbox" />
        <p>{todo.title}</p>
      </div>
      <small onClick={handleClickdelete}>X</small>

    </div>
  )
}
