import React, { useState } from "react";
import AddNote from "./components/AddNote/AddNote";
import Note from "./components/Note/Note";
import "./App.css"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Исправь баг с длинным словом", isCompleted: false },
    { id: 2, title: "Немного улучши дизайн чтобы Х была сбоку а не прилипала", isCompleted: false },
    { id: 3, title: "Когда всё сделаешь убери эти заметки по умолчанию.", isCompleted: false }
  ])

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
