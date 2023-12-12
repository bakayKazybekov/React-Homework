import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../../components/Todos";
import { getTodos } from "../../store/selectors";
import { fetchTodos } from "../../store/todos/actions";
import { addTodos } from "../../store/todos/slice";

function TodosContainer () {
    const dispatch = useDispatch()

    const { todos, isLoad, error } = useSelector(getTodos)

    const handleAddTodos = () => {
        dispatch(addTodos(
            {
                title: 'title'
            }))
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    if (isLoad) return <h1>Загрузка Тудушек!</h1>
    return <Todos error={error} todos={todos} handleAddTodos={handleAddTodos}/>
}

export default TodosContainer