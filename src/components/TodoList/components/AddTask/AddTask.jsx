import { util } from '../../../../utils/util'

function AddTask ({ setTodoList }) {
    const onSubmit = (e) => {
        e.preventDefault()
        setTodoList((prevTodoList) => [...prevTodoList, {...util(e.target), id: prevTodoList.length}])
    }

    return (
        <>
            <form className='wrapper' onSubmit={onSubmit}>
                <label>
                    <span>Заголовок задачи</span>
                    <br />
                    <input name='title' type="text" />
                </label>
                <label>
                    <span>Задача</span>
                    <br />
                    <input name='task' type="text" />
                </label>
                <button className='add_btn'>Добавить</button>
            </form>
        </>
    )
}

export default AddTask;