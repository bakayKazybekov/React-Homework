import { util } from '../../../../util/util'
import { useDispatch } from 'react-redux'
import { addTodo } from "../../../../store/actions"
import s from './AddTask.module.css';

function AddTask () {
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
            id: Math.random(),
            isDone: false,
        }

        dispatch(addTodo(obj))
    }

    return (
        <form className={s.wrapper} onSubmit={onSubmit}>
            <label className={s.label}>
                <span>Заголовок задачи</span>
                <input className={s.input} name='title' type="text"/>
            </label>
            <label className={s.label}>
                <span>Задача</span>
                <input className={s.input} name='task' type="text"/>
            </label>
            <button className={s.add_btn}>Добавить</button>
        </form>
    )
}

export default AddTask;