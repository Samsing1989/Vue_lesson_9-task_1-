<template>
    <div class="container">
        <div v-for="prod in productList" :key="prod.id">
            <a :href="prod.link" class="items">
                <div class="image"><img :src="prod.imgSrc" alt="img" /></div>
                <div class="body">
                    <div class="title">{{ prod.title }}</div>
                    <div class="price">{{ prod.price }}</div>
                    <div class="old-price">{{ prod.oldPrice }}</div>
                </div>
            </a>
        </div>
    </div>
    <button class="button" @click="onHome">На головну</button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProductsPage',
    data() {
        return {
            productList: [],
        }
    },
    computed: {
        ...mapGetters(['getProductByCategory']),
        productCategory() {
            return this.$route.params.productCategory
        },
    },
    created() {
        this.productList = this.getProductByCategory(this.productCategory)
    },
    methods: {
        onHome() {
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
a {
    color: inherit;
    text-decoration: none;
}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
}

.items {
    height: 220px;
    display: flex;
    gap: 30px;
    padding: 20px;
    background-color: rgb(232, 232, 232);
    border-radius: 20px;
}
.image {
    img {
        max-width: 300px;
        max-height: 200px;
    }
}
.body {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.title {
    color: rgb(110, 110, 255);
}
.price {
    font-size: 30px;
    color: red;
}
.old-price {
    text-decoration: line-through;
    opacity: 0.5;
}
.button {
    border-radius: 20px;
    transition: all 0.3s;
    padding: 10px;
    font-size: 20px;
    background-color: rgb(113, 174, 20);
    &:hover {
        background-color: greenyellow;
    }
}
</style>
