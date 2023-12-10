import React from "react"

const Posts = ({ error, posts, handleAddPost }) => {

    if (error) return <h1>{error}</h1>

    return (
        <>
            <button onClick={handleAddPost}>Add</button>
            <ul>
                {posts.map(({ title, body, id }) => {
                    return (
                        <li key={id}>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Posts