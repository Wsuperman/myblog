import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";
import Message from "../views/Message";
import Project from "../views/Project";
import BlogDetail from "../views/Blog/components/Detail"
import NotFound from "../views/NotFound.vue"

export default [{
        name: "Home",
        path: "/",
        component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        name: "About",
        path: "/about",
        component: About,
        meta: {
            title: "关于我"
        }
    },
    {
        name: "Blog",
        path: "/article",
        component: Blog,meta: {
            title: "文章"
        }
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: Blog,
        meta: {
            title: "文章"
        }
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: BlogDetail,
        meta: {
            title: "文章详情"
        }
    },
    {
        name: "Message",
        path: "/message",
        component: Message,
        meta: {
            title: "留言板"
        }
    },
    {
        name: "Project",
        path: "/project",
        component: Project,
        meta: {
            title: "项目&&效果"
        }
    },
    {
        name: "NotFound",
        path: "*", // 前面都没有匹配的话就匹配它
        component: NotFound,
    },
]
