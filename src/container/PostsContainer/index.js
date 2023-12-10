import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts";
import { fetchPosts } from "../../store/posts/action";
import { addPosts } from "../../store/posts/slice";


const PostsContainer = () => {
    const dispatch = useDispatch()

    const posts = useSelector((state) => state.postsReducer.posts)
    const isLoad = useSelector((state) => state.postsReducer.isLoad)
    const error = useSelector((state) => state.postsReducer.error)

    const handleAddPost = () => {
        dispatch(addPosts(
            {
                title: 'title',
                body: 'body'
            }))
    }

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    

    return (
        <>
            {isLoad ? <h1>Загрузка Постов!</h1> : <Posts error={error} posts={posts} handleAddPost={handleAddPost}/>}
        </>
    )
}

export default PostsContainer