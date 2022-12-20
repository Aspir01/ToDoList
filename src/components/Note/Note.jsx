import React from "react";
import "./Note.css"



const Note = ({ todo, checkTodo, removeTask }) => {
    return (
        <div className={todo.isCompleted ? "main hide" : "main"} key={todo.id} >
            <div className={"teext"} onClick={() => checkTodo(todo.id)}>
                {todo.title}
            </ div>
            <div className="delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default Note