import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Detail from "@/views/Blog/Detail";
export default [
    { name: 'Home', path: '/', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'Blog', path: '/article', component: Blog },
    { name: 'blogDetail', path: '/article/:id', component: Detail },
    { name: 'categoryBlog', path: '/article/cate/:categoryId', component: Blog },
    { name: 'Message', path: '/message', component: Message },
    { name: 'Project', path: '/project', component: Project },
]