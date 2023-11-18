import { util } from '../../../../utils/util'

function AddTask ({ setTodoList }) {
    const onSubmit = (e) => {
        e.preventDefault()
        const firstInput = e.target[0].value;
        const secondInput = e.target[1].value;
        if (!firstInput.trim() || !secondInput.trim()) {
            alert('Заполните все поля!')
            return
        }
        setTodoList((prevTodoList) => [...prevTodoList, {...util(e.target), id: prevTodoList.length}])
        // очистку полей сделал в util
    }

    return (
        <>
            <form className='wrapper' onSubmit={onSubmit}>
                <label>
                    <span>Заголовок задачи</span>
                    <br />
                    <input name='title' type="text"/>
                </label>
                <label>
                    <span>Задача</span>
                    <br />
                    <input name='task' type="text"/>
                </label>
                <button className='add_btn'>Добавить</button>
            </form>
        </>
    )
}

export default AddTask;