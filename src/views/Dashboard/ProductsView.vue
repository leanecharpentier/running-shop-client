<script setup>
import AsideNav from "@/components/Dashboard/AsideNav.vue";
import { deleteProduct, getProductsByUserId } from "@/services/products.services";

import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const products = ref([]);

onMounted(async () => {
    const userId = localStorage.getItem("userId");
    products.value = await getProductsByUserId(userId);
});

async function handleDelete(productId) {
    try {
        await deleteProduct(productId);
        products.value = [...products.value.filter(product => product.idProduct !== productId)];
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}
</script>

<template>
    <main>
        <AsideNav class="aside" />
        <section class="content">
            <div class="header flex-row">
                <h1>{{ t("dashboard.products.title") }}</h1>
                <RouterLink class="btn-add" to="/dashboard/products/add">{{
                    $t("dashboard.products.btn-add")
                }}</RouterLink>
            </div>
            <table v-if="products.length > 0">
                <thead>
                    <th>{{ t("dashboard.products.form.label.title") }}</th>
                    <th>{{ t("dashboard.products.form.price.title") }}</th>
                    <th>{{ t("dashboard.products.form.gendered.title") }}</th>
                    <th>{{ t("dashboard.products.form.size.title") }}</th>
                    <th>{{ t("dashboard.products.form.colours.title") }}</th>
                    <th>{{ t("dashboard.products.form.quantity.title") }}</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.idProduct">
                        <td>{{ product.label }}</td>
                        <td>{{ product.price }} €</td>
                        <td>{{ product.gendered }}</td>
                        <td>{{ product.size }}</td>
                        <td>{{ product.colours }}</td>
                        <td>{{ product.quantity }}</td>
                        <td class="icons-actions">
                            <RouterLink :to="{ name: 'update-product', params: { id: product.idProduct } }">
                                <font-awesome-icon class="icon-edit" icon="edit" />
                            </RouterLink>
                            <form @submit.prevent="handleDelete(product.idProduct)">
                                <button type="submit" class="btn-delete">
                                    <font-awesome-icon icon="trash" />
                                </button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p v-else>{{ t("dashboard.products.no-products") }}</p>
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

        .header {
            justify-content: space-between;
            margin-bottom: 30px;
            h1 {
                font-size: 1.5rem;
                text-transform: uppercase;
                font-family: "Koulen", sans-serif;
            }
            .btn-add {
                background-color: $green;
                padding: 12px 24px;
                color: $white;
                text-decoration: none;
                border-radius: 20px;
            }
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 10px;

            thead {
                text-align: left;
                font-weight: bold;
            }

            th {
                padding: 10px;
                text-transform: uppercase;
                font-size: 0.9rem;
                text-align: center;
            }

            tbody {
                tr {
                    background-color: $beige;
                    border-radius: 20px;
                }

                td {
                    padding: 10px;
                    text-align: center;
                }
                .icons-actions {
                    display: flex;
                    gap: 10px;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    .icon-edit {
                        color: $black;
                    }
                    .btn-delete {
                        background-color: $beige;
                        border: none;
                    }
                }
            }
        }
    }
}
</style>
