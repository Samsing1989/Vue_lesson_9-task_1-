import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ShopPage from '@/views/ShopPage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import PaymentRulesPage from '@/views/PaymentRulesPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopPage,
    },
    {
        path: '/product/:productCategory',
        name: 'product',
        component: ProductsPage,
    },

    {
        path: '/payment',
        name: 'payment',
        component: PaymentRulesPage,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPage,
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router
