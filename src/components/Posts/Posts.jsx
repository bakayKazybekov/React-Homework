import React, { useEffect, useState } from "react";
import Post from "./components/Post";

async function getPosts () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

function Posts () {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        async function fetchData () {
            const data = await getPosts();
            setPosts(data);
        }
        fetchData();
    }, []);

    const addPosts = () => {
        if (title.trim() && body.trim()) {
            setPosts((prevPosts) => [...prevPosts, {
                title: title,
                body: body,
                userId: null,
                id: prevPosts.length + 1,
            }]);
        }
        setTitle('');
        setBody('');
    }

    return (
        <>
            <div>
                <label>
                    <span>Title</span>
                    <br />
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
                </label>
                <br />
                <label>
                    <span>Body</span>
                    <br />
                    <input value={body} onChange={(e) => setBody(e.target.value)} type="text"/>
                </label>
                <br />
                <button onClick={addPosts}>Добавить пост</button>
            </div>

            <ul>
                {posts.map(({ id, title, body }) => {
                    return (
                        <React.Fragment key={id}>
                            <Post
                                title={title}
                                body={body}
                            />
                        </React.Fragment>
                    );
                })}
            </ul>
        </>
    );
}

export default Posts;