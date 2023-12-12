function Albums ({ albums, error, handleAddAlbum }) {

    if (error) return <h1>Ошибка при загрузке Альбомов!</h1>

    return (
        <>
            <button onClick={handleAddAlbum}>Add</button>
            <ul>
                {albums.map(({ title, id }) => {
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

export default Albums