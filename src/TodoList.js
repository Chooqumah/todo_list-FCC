import React from 'react'
import DeleteTodo from './DeleteTodo'

const TodoList = ({ todos, setTodos }) => {
  const handleToggle = (todo) => {
    const updatedTodos = todos.map(t => {
      return t.id === todo.id ? 
      {...t,
      done: !t.done} : t
    })
    setTodos(updatedTodos)
  }

  const tasks = todos.map(todo => {
    return <li
              style={{textDecoration: todo.done ? 'line-through' : ''}}
              key={todo.id}
              onDoubleClick={() => handleToggle(todo)}>
              {todo.text}
              <DeleteTodo todo={todo} setTodos={setTodos}/>
           </li>
  })
  return (
    <div>
      <ul>
        {todos.length > 0 ? tasks : <h3>No more tasks</h3>}
      </ul>
    </div>
  )
}

export default TodoList;