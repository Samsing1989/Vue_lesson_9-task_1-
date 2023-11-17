<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link to="/shop">Магазин</router-link> |
        <router-link to="/payment">Правила оплати</router-link> |
        <router-link to="/contacts">Контакти</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-left: 250px;
    padding-right: 250px;
    color: #2c3e50;
    font-size: 24px;
}

nav {
    padding: 30px;
    text-align: center;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
