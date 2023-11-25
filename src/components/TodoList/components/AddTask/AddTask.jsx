import { util } from '../../../../util/util'
import { useDispatch } from 'react-redux'
import { addTodo } from "../../../../store"

function AddTask ({}) {
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        const firstInput = e.target[0].value;
        const secondInput = e.target[1].value;
        if (!firstInput.trim() || !secondInput.trim()) {
            alert('Заполните все поля!')
            return
        }
        const obj = {
            ...util(e.target),
            id: Math.random()
        }

        dispatch(addTodo(obj))
    }

    return (
        <form className='wrapper' onSubmit={onSubmit}>
            <label>
                <span>Заголовок задачи</span>
                <input name='title' type="text"/>
            </label>
            <label>
                <span>Задача</span>
                <input name='task' type="text"/>
            </label>
            <button className='add_btn'>Добавить</button>
        </form>
    )
}

export default AddTask;