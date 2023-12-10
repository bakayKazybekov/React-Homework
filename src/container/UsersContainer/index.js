import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "../../components/Users";
import { fetchUsers } from "../../store/users/actions";
import { addUsers } from "../../store/users/slice";

function UsersContainer () {
    const dispatch = useDispatch()

    const users = useSelector((state) => state.usersReducer.users)
    const isLoad = useSelector((state) => state.usersReducer.isLoad)
    const error = useSelector((state) => state.usersReducer.error)
    console.log(users)

    const handleAddUser = () => {
        dispatch(addUsers({
            name: 'name',
            username: 'username'
        }))
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <>
            {isLoad ? <h1>Загрузка Пользователей!</h1> : <Users error={error} users={users} handleAddUser={handleAddUser} />}
        </>
    )
}

export default UsersContainer;