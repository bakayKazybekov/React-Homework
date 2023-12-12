import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../../components/Comments";
import { fetchComments } from "../../store/comments/actions";
import { addComments } from "../../store/comments/slice";
import { getComments } from "../../store/selectors";

function CommentsContainer () {
    const dispatch = useDispatch()

    const { comments, isLoad, error } = useSelector(getComments)

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

    if (isLoad) return <h1>Загрузка Комментариев!</h1>
    return <Comments error={error} comments={comments} handleAddComment={handleAddComment} />
}

export default CommentsContainer