<template>
    <div class="item">При отриманні</div>
    <div class="item">Переказ на карту</div>
    <div class="item">Записати у зошит</div>
</template>

<script>
export default {
    name: 'PaymentRulesPage',
}
</script>

<style lang="scss" scoped>
.item {
    &:not(:last-child) {
        margin-bottom: 10px;
    }
}
</style>
