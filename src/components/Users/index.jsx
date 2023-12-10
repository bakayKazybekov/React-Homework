function Users ({ users, error, handleAddUser }) {

    if (error) return <h1>{error}</h1>

    return (
        <>
            <button onClick={handleAddUser}>Add</button>
            <ul>
                {users.map(({ name, username, id }) => {
                    return (
                        <li key={id}>
                            <h2>{name}</h2>
                            <h3>{username}</h3>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Users;