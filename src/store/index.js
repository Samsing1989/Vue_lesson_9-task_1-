import { createStore } from 'vuex'
import categoryList from '@/data/categoryList.json'
import productsList from '@/data/productsList.json'
export default createStore({
    state: {
        categoryList: [],
        productsList: [],
        productCategory: null,
    },
    getters: {
        getCategoryList: ({ categoryList }) => categoryList,
        getProductsList: (state) => state.productsList,
        getProductByCategory: (state) => (productCategory) =>
            state.productsList.filter((product) => product.category === productCategory),
    },
    mutations: {
        setData(state, { categoryList, productsList }) {
            state.categoryList = categoryList
            state.productsList = productsList
        },
    },
    actions: {
        loadData({ commit }) {
            commit('setData', { categoryList, productsList })
        },
    },
    modules: {},
})
