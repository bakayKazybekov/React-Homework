function Comments ({ comments, error, handleAddComment }) {

    if (error) return <h1>Ошибка при загрузке Комментариев!</h1>

    return (
        <>
            <button onClick={handleAddComment}>Add</button>
            <ul>
                {comments.map(({ name, body, id }) => {
                    return (
                        <li key={id}>
                            <h3>{name}</h3>
                            <p>{body}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Comments