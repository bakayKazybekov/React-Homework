import { createBrowserRouter } from "react-router-dom";
import AlbumsContainer from "../container/AlbumsContainer";
import CommentsContainer from "../container/CommentsContainer";
import PhotosContainer from "../container/PhotosContainer";
import PostsContainer from "../container/PostsContainer";
import TodosContainer from "../container/TodosContainer";
import UsersContainer from "../container/UsersContainer";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Корневой роут</div>
    },
    {
      path: "/posts",
      element: <PostsContainer/>
    },
    {
      path: '/users',
      element: <UsersContainer/>
    },
    {
      path: '/comments',
      element: <CommentsContainer/>
    },
    {
      path: '/albums',
      element: <AlbumsContainer/>
    },
    {
      path: '/todos',
      element: <TodosContainer/>
    },
    {
      path: '/photos',
      element: <PhotosContainer/>
    }
]);