import React, { useRef, useState } from 'react'

const AddTodo = ({ setTodos }) => {
  const [text, setText] = useState('')
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo ={
      id: 4,
      text,
      done: false
    }
    setTodos(prevTodos => [...prevTodos, todo])
    setText('')

  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Add Todo'
            value={text} 
            ref={inputRef}
            onChange={handleChange}
            />
        <input type='submit' />
      </form>
    </div>
  )
}

export default AddTodo;