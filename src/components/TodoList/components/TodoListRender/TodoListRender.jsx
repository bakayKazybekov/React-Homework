import React from "react"
import { useCallback } from "react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../../../../store/actions"
import { editTodo } from "../../../../store/actions"
import { changeDoneTodo } from "../../../../store/actions"
import s from './TodoListRender.module.css'


const TodoListRender = React.memo(() => {

    const todoList = useSelector((state) => state.todoList)
    const dispatch = useDispatch();
    
    const deleteTask = useCallback((id) => {
        dispatch(deleteTodo(id))
    }, [])

    const editTask = useCallback((obj) => {
        const newTitle = prompt('Введите новый заголовок', obj.title)
        const newTask = prompt('Введите новую задачу', obj.task)
        if (newTitle === null || newTask === null) {
            return
        } else if (!newTitle.trim() || !newTask.trim()) {
            alert('Заполните все поля!')
            return
        }
        obj.title = newTitle;
        obj.task = newTask;
        dispatch(editTodo(obj))
    }, [])

    const onCheckbox = useCallback((id) => {
        dispatch(changeDoneTodo(id))
    })

    return (
        <ul className={s.todo_list}>
            {todoList.map((item) => {
                const { id, title, task, isDone} = item
                return <li className={isDone ? s.li_done : s.li} key={id}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.task}>{task}</span>
                    <div className={s.buttons}>
                        <input onChange={() => onCheckbox(id)} type="checkbox" />
                        <button onClick={() => editTask(item)} className={s.edit_btn}>Редактировать</button>
                        <button onClick={() => deleteTask(id)} className={s.delete_btn}>Удалить</button>
                    </div>
                </li>
            })}
        </ul>
    )
})

export default TodoListRender;