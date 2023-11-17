<template>
    <h2 class="title">Список товарів:</h2>
    <div
        v-for="product in getCategoryList"
        :key="product.id"
        class="container"
        @click="onProductClick(product.category)"
    >
        {{ product.category }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ShopPage',

    computed: {
        ...mapGetters(['getCategoryList']),
    },
    created() {
        this.loadData()
    },
    methods: {
        ...mapActions(['loadData']),
        onProductClick(category) {
            this.$router.push({
                name: 'product',
                params: {
                    productCategory: category,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    transition: all 0.3s;
    padding: 10px;
    max-width: 250px;
    border: 2px solid #000;
    cursor: pointer;
    margin-bottom: 5px;
    border-radius: 10px;
    text-align: center;
    &:hover {
        background-color: green;
    }
}
</style>
