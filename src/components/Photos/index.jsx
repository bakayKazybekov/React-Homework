function Photos ({ photos, error, handleAddPhoto }) {

    if (error) return <h1>Ошибка при загрузке Фотографий!</h1>

    return (
        <>
            <button onClick={handleAddPhoto}>Add</button>
            <ul>
                {photos.map(({ title, url, id }) => {
                    return (
                        <li key={id}>
                            <img src={url}/>
                            <h3>{title}</h3>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Photos