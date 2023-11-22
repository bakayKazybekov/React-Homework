import React from "react"
import { useCallback } from "react"

const TodoListRender = React.memo(({ 
        todoList, 
        setTodoList 
    }) => {
    
    const deleteTask = useCallback((id) => {
        setTodoList((prevTodoList) => prevTodoList.filter((i) => i.id !== id && i))
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
        setTodoList((prev) => prev.filter((i) => i.id === obj.id ? obj : i))
    }, [])

    return (
        <ul className='todo_list'>
            {todoList.map((i) => {
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