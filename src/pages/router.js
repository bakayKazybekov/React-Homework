import Posts from '../components/Posts/Posts';
import TodoListPage from './TodoListPage/TodoListPage';
import Users from '../components/Users/Users';
import { createBrowserRouter } from "react-router-dom";
import Header from '../components/Header/Header';

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
            <Header/>
            <div>Корневой роутep</div>
        </>
      ),
    },
    {
      path: "/todo-list",
      element: (
        <>
            <Header/>
            <TodoListPage/>
        </>
      ),
    },
    {
      path: "/posts",
      element: (
        <>
            <Header/>
            <Posts/>
        </>
      ),
    },
    {
      path: "/users",
      element: (
        <>
            <Header/>
            <Users/>
        </>
      ),
    },
]);