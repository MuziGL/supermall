import {createRouter, createWebHistory} from "vue-router";

// 路由的懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 创建路由对象
const routes = [
    {
        // 进入后的默认路径
        Path: '',
        // 重定向，页面无法返回
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 导出router
export default router