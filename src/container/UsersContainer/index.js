import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "../../components/Users";
import { getUsers } from "../../store/selectors";
import { fetchUsers } from "../../store/users/actions";
import { addUsers } from "../../store/users/slice";

function UsersContainer () {
    const dispatch = useDispatch()

    const { users, isLoad, error } = useSelector(getUsers)
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
    
    if (isLoad) return <Spin style={{width: '100%'}} indicator={<LoadingOutlined style={{ fontSize: 100}} spin/>} />
    return <Users error={error} users={users} handleAddUser={handleAddUser} />
}

export default UsersContainer;