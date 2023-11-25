import React from "react"
import { useCallback } from "react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../../../../store"
import { editTodo } from "../../../../store"


const TodoListRender = React.memo(({}) => {

    const store = useSelector((state) => state.todoList)
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

    return (
        <ul className='todo_list'>
            {store.map((i) => {
                return <li key={i.id}>
                    <h3 className="title">{i.title}</h3>
                    <span className="task">{i.task}</span>
                    <div className="buttons">
                        {/* если написать onClick={editTask(i)}, оно же будет сразу вызываться */}
                        <button onClick={() => editTask(i)} className='edit_btn'>Редактировать</button>
                        <button onClick={() => deleteTask(i.id)} className='delete_btn'>Удалить</button>
                    </div>
                </li>
            })}
        </ul>
    )
})

export default TodoListRender;