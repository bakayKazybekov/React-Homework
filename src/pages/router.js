import { createBrowserRouter } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import AlbumsContainer from "../container/AlbumsContainer";
import CommentsContainer from "../container/CommentsContainer";
import PhotosContainer from "../container/PhotosContainer";
import PostsContainer from "../container/PostsContainer";
import TodosContainer from "../container/TodosContainer";
import UsersContainer from "../container/UsersContainer";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HeaderNav/>
          <div>Корневой роут</div>
        </>
      )
    },
    {
      path: "/posts",
      element: (
        <>
          <HeaderNav/>
          <PostsContainer/>
        </>
      )
    },
    {
      path: '/users',
      element: (
        <>
          <HeaderNav/>
          <UsersContainer/>
        </>
      )
    },
    {
      path: '/comments',
      element: (
        <>
          <HeaderNav/>
          <CommentsContainer/>
        </>
      )
    },
    {
      path: '/albums',
      element: (
        <>
          <HeaderNav/>
          <AlbumsContainer/>
        </>
      )
    },
    {
      path: '/todos',
      element: (
        <>
          <HeaderNav/>
          <TodosContainer/>
        </>
      )
    },
    {
      path: '/photos',
      element: (
        <>
          <HeaderNav/>
          <PhotosContainer/>
        </>
      )
    }
]);