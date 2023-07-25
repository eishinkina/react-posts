
import About from "./../Pages/About";
import Posts from "./../Pages/Posts";
import PostsIdPage from "./../Pages/PostIdPage"

export const routes = [
    {path: '/about', element: <About />, exact: true},
    {path: '/posts', element: <Posts />, exact: true},
    {path: '/posts/:id', element: <PostsIdPage />, exact: true}
]