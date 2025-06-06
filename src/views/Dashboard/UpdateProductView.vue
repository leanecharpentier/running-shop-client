<script setup>
import AsideNav from "@/components/Dashboard/AsideNav.vue";
import { addProduct, getProductsById, updateProduct } from "@/services/products.services";

import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const productId = route.params.id;

const label = ref("");
const gendered = ref("");
const size = ref("");
const colours = ref("");
const price = ref("");
const quantity = ref("");
const errorMessage = ref("");

onMounted(async () => {
    try {
        const product = await getProductsById(productId);
        label.value = product.label;
        gendered.value = product.gendered;
        size.value = product.size;
        colours.value = product.colours;
        price.value = product.price;
        quantity.value = product.quantity;
    } catch (error) {
        console.error("Error fetching product:", error);
        errorMessage.value = t("dashboard.products.add.error");
    }
});

async function handleSubmit() {
    try {
        await updateProduct({
            productId: productId,
            label: label.value,
            gendered: gendered.value,
            size: size.value,
            colours: colours.value,
            price: price.value,
            quantity: quantity.value,
            idUser: localStorage.getItem("userId"),
        });
        router.push("/dashboard/products");
    } catch (error) {
        errorMessage.value = error.message || t("dashboard.products.add.error");
    }
}
</script>

<template>
    <main>
        <AsideNav class="aside" />
        <section class="content">
            <h1>{{ t("dashboard.products.update.title") }}</h1>
            <form @submit.prevent="handleSubmit" class="flex-col">
                <select v-model="label" name="label" id="label">
                    <option value="">{{ t("dashboard.products.form.label.title") }}</option>
                    <option value="tshirt">{{ t("dashboard.products.form.label.tshirt") }}</option>
                    <option value="short">{{ t("dashboard.products.form.label.short") }}</option>
                </select>
                <select v-model="gendered" name="gendered" id="gendered">
                    <option value="">{{ t("dashboard.products.form.gendered.title") }}</option>
                    <option value="men">{{ t("dashboard.products.form.gendered.men") }}</option>
                    <option value="women">{{ t("dashboard.products.form.gendered.women") }}</option>
                </select>
                <select v-model="size" name="size" id="size">
                    <option value="">{{ t("dashboard.products.form.size.title") }}</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <select v-model="colours" name="colours" id="colours">
                    <option value="">{{ t("dashboard.products.form.colours.title") }}</option>
                    <option value="black">{{ t("dashboard.products.form.colours.black") }}</option>
                    <option value="white">{{ t("dashboard.products.form.colours.white") }}</option>
                    <option value="red">{{ t("dashboard.products.form.colours.red") }}</option>
                    <option value="blue">{{ t("dashboard.products.form.colours.blue") }}</option>
                    <option value="pink">{{ t("dashboard.products.form.colours.pink") }}</option>
                    <option value="grey">{{ t("dashboard.products.form.colours.grey") }}</option>
                    <option value="green">{{ t("dashboard.products.form.colours.green") }}</option>
                    <option value="purple">{{ t("dashboard.products.form.colours.purple") }}</option>
                    <option value="yellow">{{ t("dashboard.products.form.colours.yellow") }}</option>
                    <option value="navy">{{ t("dashboard.products.form.colours.navy") }}</option>
                </select>
                <input
                    v-model="price"
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    step="0.01"
                    :placeholder="t('dashboard.products.form.price.title')"
                    required
                />
                <input
                    v-model="quantity"
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    step="1"
                    :placeholder="t('dashboard.products.form.quantity.title')"
                    required
                />
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                <button type="submit" class="btn-submit">{{ t("dashboard.products.update.submit") }}</button>
            </form>
        </section>
    </main>
</template>

<style scoped lang="scss">
@use "../../assets/variables.scss" as *;

main {
    display: flex;
    flex-direction: row;

    .content {
        padding: 50px;
        height: 100vh;
        width: 100%;
        overflow-y: auto;

        h1 {
            font-size: 1.5rem;
            text-transform: uppercase;
            font-family: "Koulen", sans-serif;
            margin-bottom: 30px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 60%;
            select,
            input {
                width: 100%;
                background-color: $beige;
                border-radius: 100px;
                border: none;
                padding: 12px 24px;
                font-size: 1rem;
                font-family: "Arial", sans-serif;
            }

            .btn-submit {
                font-family: "Koulen", sans-serif;
                background-color: $black;
                color: $white;
                padding: 12px 40px;
                border-radius: 100px;
                text-decoration: none;
                white-space: nowrap;
                border: none;
                cursor: pointer;
            }

            .error-message {
                color: red;
                font-size: 0.9rem;
                margin-top: 10px;
                text-align: center;
            }
        }
    }
}
</style>
