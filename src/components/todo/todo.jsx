import React from "react"
import styles from './todo.module.css'

const Todo = (props) => {
    return <>
        <div className={styles.todoItem}>
            <input onChange={props.onChangeTodoCheckbox(props.index)} checked={props.isDone} type='checkbox'/> 
            <span>{props.todoStr}</span>
        </div>
    </>
}

export default Todo