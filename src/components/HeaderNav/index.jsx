import s from './HeaderNav.module.css'
import { Layout, Menu } from "antd"
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;

const navList = [
    {
        key: '/',
        label: 'Главная'
    },
    {
        key: '/posts',
        label: 'Посты'
    },
    {
        key: '/users',
        label: 'Пользователи'
    },
    {
        key: '/comments',
        label: 'Комментарии'
    },
    {
        key: '/albums',
        label: 'Альбомы'
    },
    {
        key: '/todos',
        label: 'Туду'
    },
    {
        key: '/photos',
        label: 'Фотографии'
    },
]

function HeaderNav () {
    const navigate = useNavigate()

    const onMenu = (e) => {
        navigate(e.key)
    }
    return (
        <>
            <Header className={s.nav} >
                <div>LOGO</div>
                <Menu onClick={onMenu}
                    theme='dark'
                    items={navList}
                />
            </Header>
        </>   
    )
}

export default HeaderNav