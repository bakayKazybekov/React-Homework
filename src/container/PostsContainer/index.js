import {  CircularProgress, LinearProgress, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts";
import { fetchPosts } from "../../store/posts/action";
import { addPosts } from "../../store/posts/slice";
import { getPosts } from "../../store/selectors";


const PostsContainer = () => {
    const dispatch = useDispatch()

    const { posts, isLoad, error } = useSelector(getPosts)

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
    
    if (isLoad) return <Stack ml={'48%'} mt={'25%'}><CircularProgress/></Stack>
    return <Posts error={error} posts={posts} handleAddPost={handleAddPost}/>
}

export default PostsContainer