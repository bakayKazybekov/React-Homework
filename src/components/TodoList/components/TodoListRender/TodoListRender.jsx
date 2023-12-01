import React from "react"
import { useCallback } from "react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../../../../store"
import { editTodo } from "../../../../store"
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
        if (!newTitle.trim() || !newTask.trim()) {
            alert('Заполните все поля!')
            return
        }
        obj.title = newTitle;
        obj.task = newTask;
        dispatch(editTodo(obj))
    }, [])

    // когда убираю return, prompt вызывается
    return (
        <ul className={s.todo_list}>
            {todoList.map((item) => {
                const { id, title, task } = item
                return <li className={s.li} key={id}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.task}>{task}</span>
                    <div className={s.buttons}>
                        {/* если написать onClick={editTask(i)}, оно же будет сразу вызываться */}
                        <button onClick={() => editTask(item)} className={s.edit_btn}>Редактировать</button>
                        <button onClick={() => deleteTask(id)} className={s.delete_btn}>Удалить</button>
                    </div>
                </li>
            })}
        </ul>
    )
})

export default TodoListRender;