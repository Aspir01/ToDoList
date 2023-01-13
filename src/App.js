import React, { useState } from "react";
import AddNote from "./components/AddNote/AddNote";
import Note from "./components/Note/Note";
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (value) => {
    if (value) {
      const newItem = {
        id: Math.random().toString(36).slice(2, 9),
        title: value,
        isCompleted: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)])
  }

  const checkTodo = (id) => {
    setTodos([
      ...todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : { ...item }
      )
    ])
  }
  return (
    <div className="App">
      <p>Список задач</p>
      <AddNote addTask={addTask} />
      {todos.map((item) => {
        return <Note
          todo={item}
          key={item.id}
          checkTodo={checkTodo}
          removeTask={removeTask}
        />
      })}
    </div>
  );
}

export default App;
