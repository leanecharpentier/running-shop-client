<script setup>
import CardProduct from "@/components/CardProduct.vue";
import { getProducts } from "@/services/products.services";

import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import MainHeader from "../components/MainHeader.vue";

const { t } = useI18n();

const products = ref([]);

onMounted(async () => {
    products.value = await getProducts();
});
</script>

<template>
    <MainHeader :title="t('clothes.title')" />
    <section class="product-section">
        <CardProduct v-for="product in products" :key="product.id"
            :imgUrl="product.imgUrl"
            :productName="product.label"
            :gender="product.gendered"
            :size="product.size"
            :price="product.price"
            :color="product.colours"
        />
    </section>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss" as *;
section {
    width: 90vw;
    margin: auto;
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
}

</style>
