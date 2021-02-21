import { createRouter, createWebHistory } from 'vue-router'
const Home = import('views/home/Home');
const Category = import('views/category/Category');
const Details = import('views/details/Details');
const Profile = import('views/profile/Profile');
const ShopCart = import('views/shopcart/ShopCart');

const routes = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '图书商城-分类'
    }
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    meta: {
      title: '图书商城-商品详情'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '图书商城-个人中心'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: '图书商城-购物车'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  next();
  document.title = to.meta.title;
})

export default router
