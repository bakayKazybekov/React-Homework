import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../../components/Todos";
import { fetchTodos } from "../../store/todos/actions";
import { addTodos } from "../../store/todos/slice";

function TodosContainer () {
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todosReducer.todos)
    const isLoad = useSelector((state) => state.todosReducer.isLoad)
    const error = useSelector((state) => state.todosReducer.error)

    const handleAddTodos = () => {
        dispatch(addTodos(
            {
                title: 'title'
            }))
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <>
            {isLoad ? <h1>Загрузка Тудушек!</h1> : <Todos error={error} todos={todos} handleAddTodos={handleAddTodos}/>}
        </>
    )
}

export default TodosContainer