import Vue from 'vue'
import vueRouter from 'vue-router'


const Home=()=>import('views/home/Home.vue')
const Category=()=>import('views/category/Category.vue')
const Cart=()=>import('views/cart/Cart.vue')
const Profile=()=>import('views/profile/Profile.vue')
const Detail=()=>import('views/detail/Detail.vue')

Vue.use(vueRouter);
const routes=[
    {
        path:'',
        redirect:'Home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail:iid',
        component:Detail
    }
]
const router=new vueRouter({
    routes,
    mode:'history'
})
export default router