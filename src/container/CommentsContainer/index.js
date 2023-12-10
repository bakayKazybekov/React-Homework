import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../../components/Comments";
import { fetchComments } from "../../store/comments/actions";
import { addComments } from "../../store/comments/slice";

function CommentsContainer () {
    const dispatch = useDispatch()

    const comments = useSelector((state) => state.commentsReducer.comments)
    const isLoad = useSelector((state) => state.commentsReducer.isLoad)
    const error = useSelector((state) => state.commentsReducer.error)

    const handleAddComment = () => {
        dispatch(addComments(
            {
                name: 'name',
                body: 'body'
            }))
    }

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    return (
        <>
            {isLoad ? <h1>Загрузка Комментариев!</h1> : <Comments error={error} comments={comments} handleAddComment={handleAddComment} />}
        </>
    )
}

export default CommentsContainer