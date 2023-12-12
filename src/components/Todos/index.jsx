function Todos ({ todos, error, handleAddTodos }) {

    if (error) return <h1>Ошибка при загрузке Тудушек!</h1>

    return (
        <>
            <button onClick={handleAddTodos}>Add</button>
            <ul>
                {todos.map(({ title, id }) => {
                    return (
                        <li key={id}>
                            <h3>{title}</h3>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Todos