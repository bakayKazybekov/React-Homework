import { useState } from 'react'
import './TodoList.css'
import AddTask from './components/AddTask/AddTask';
import TodoListRender from './components/TodoListRender/TodoListRender';

function TodoList () {
    
    const [todoList, setTodoList] = useState([]);

    
    return (
        <>
            <AddTask
                setTodoList={setTodoList}
            />

            <TodoListRender
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </>
    )
}

export default TodoList;