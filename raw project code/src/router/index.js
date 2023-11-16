import { createRouter, createWebHashHistory } from "vue-router"
import recipeHome from "@/views/recipeHome"
import weightlossDiet from "@/views/weightlossDiet";
import recipeDetail from "@/views/recipeDetail";


const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'root',
    },
    {
        name: 'home',
        path: '/home',
        component: recipeHome,
    },
    {
        name: 'diet',
        path: '/diet',
        component: weightlossDiet,
    },
    {
        name: 'detail',
        path: '/detail',
        component: recipeDetail,
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
