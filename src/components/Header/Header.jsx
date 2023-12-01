import { Link } from 'react-router-dom'

function Header () {
    return (
        <ul style={{display: 'flex', gap: '25px'}}>
            <li>
                <Link to={'/'}>Главная</Link>
            </li>
            <li>
                <Link to={'/todo-list'}>Todo List</Link>
            </li>
            <li>
                <Link to={'/posts'}>Posts</Link>
            </li>
            <li>
                <Link to={'/users'}>Users</Link>
            </li>
        </ul>
    )
}

export default Header;