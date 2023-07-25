import About from "./../Pages/About";
import Posts from "./../Pages/Posts";
import PostsIdPage from "./../Pages/PostIdPage";
import Login from "../Pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostsIdPage />, exact: true },
];
export const publicRoutes = [
  { path: "/login", element: <Login />},
];
