import React, { useState } from "react";
import "./AddNote.css"

const AddNote = ({ addTask }) => {
    const [value, setValue] = useState("")

    const changeValue = (e) => {
        setValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(value)
        setValue("")
    }

    const keyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form>
            <input type="text" className="add" onChange={changeValue} placeholder="Введите задачу" value={value} onKeyDown={keyPress} />
            <button className="btn" onClick={e => handleSubmit(e)}>+</button>
        </form>
    )
}

export default AddNote