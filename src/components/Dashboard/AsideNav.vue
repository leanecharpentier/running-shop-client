<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
function toggleLanguage() {
    locale.value = currentLanguage.value === "fr" ? "en" : "fr";
}

const currentLanguage = locale;
</script>

<template>
    <aside>
        <RouterLink class="container-logo" to="/dashboard/products">
            <img src="../../assets/images/logo-blanc.png" alt="Logo Running Shop Blanc" />
        </RouterLink>
        <nav>
            <RouterLink to="/dashboard/products">{{ $t("dashboard.products.title") }}</RouterLink>
            <RouterLink to="/dashboard/products">{{ $t("dashboard.profile.title") }}</RouterLink>
            <RouterLink to="/dashboard/products">{{ $t("dashboard.messaging.title") }}</RouterLink>
        </nav>
        <button class="button-language" @click="toggleLanguage">
            {{ currentLanguage === "fr" ? "English" : "Français" }}
        </button>
    </aside>
</template>

<style scoped lang="scss">
@use "../../assets/variables.scss" as *;
aside {
    height: 100vh;
    width: 20vw;
    background-color: $green-dark;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    .container-logo {
        width: 100%;
        img {
            width: 100%;
        }
    }
    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        a {
            color: $white;
            text-decoration: none;
            text-transform: uppercase;
            font-family: "Koulen", sans-serif;
            font-size: 1.2rem;
        }
    }
    .button-language {
        margin-top: auto;
        background-color: $beige;
        padding: 8px 24px;
        border-radius: 20px;
    }
}
</style>
