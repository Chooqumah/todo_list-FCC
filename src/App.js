import React, { useState } from "react";
import "./style.css";
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import DeleteTodo from './DeleteTodo'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <div className='overall'>
        <TodoList todos={todos} setTodos={setTodos}/>
        <AddTodo setTodos={setTodos}/>
      </div>
    </div>
  );
}
