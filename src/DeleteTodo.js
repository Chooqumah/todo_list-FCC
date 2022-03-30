import React from 'react'

const DeleteTodo = ({ todo, setTodos}) => {
  const handleDeleteTodo = () => {
    const confirmed = window.confirm("Do you want to delete this?")
    if (confirmed) {
      setTodos(prevTodos => {
        return prevTodos.filter(t => t.id !== todo.id)
      })
    }
  }

  return (
    <div>
      <span
          onClick={handleDeleteTodo}
          role='button'
          style={{
            color: 'red',
            fontWeight: 'bold',
            marginLeft: 90,
            cursor: 'pointer'
          }}
            >x</span>
    </div>
  )
}

export default DeleteTodo;