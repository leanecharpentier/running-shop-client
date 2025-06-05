<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const currentLanguage = locale;

function toggleLanguage() {
    locale.value = currentLanguage.value === "fr" ? "en" : "fr";
}

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <div class="navbar">
        <div class="container-icon">
            <RouterLink class="container-logo" to="/">
                <img src="../assets/images/logo-noir.png" alt="Logo Running Shop Blanc" />
            </RouterLink>
            <button class="burger-menu" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav :class="{ open: isMenuOpen }">
            <RouterLink to="/clothes" @click="isMenuOpen = false">{{ $t("clothes.title") }}</RouterLink>
            <RouterLink to="/shoes" @click="isMenuOpen = false">{{ $t("shoes.title") }}</RouterLink>
            <RouterLink to="/accessories" @click="isMenuOpen = false">{{ $t("accessories.title") }}</RouterLink>
            <RouterLink class="button-login" to="/login" @click="isMenuOpen = false">{{
                $t("login.button")
            }}</RouterLink>
            <button class="button-language" @click="toggleLanguage">
                {{ currentLanguage === "fr" ? "EN" : "FR" }}
            </button>
        </nav>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss" as *;

.navbar {
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $beige;
    padding: 10px 30px;
    width: 80vw;
    border-radius: 30px;
    margin: auto;

    .container-icon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .container-logo {
            width: 100px;
            display: flex;
            align-items: center;
            img {
                width: 100px;
                height: auto;
            }
        }
    }
    .burger-menu {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;

        span {
            display: block;
            width: 25px;
            height: 3px;
            background-color: $black;
        }
    }

    nav {
        display: flex;
        align-items: center;
        gap: 30px;
        a {
            font-family: "Koulen", sans-serif;
            text-decoration: none;
            color: $black;
        }
        .button-login {
            font-family: "Koulen", sans-serif;
            background-color: $black;
            color: $white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            white-space: nowrap;
        }
        .button-language{
            font-family: "Koulen", sans-serif;
            background-color: $green-light;
            color: $white;
            padding: 10px 20px;
            border-radius: 200px;
            border: none;
            text-decoration: none;
            white-space: nowrap;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
        width: 90vw;

        .burger-menu {
            display: flex;
        }

        nav {
            display: none;
            flex-direction: column;
            align-items: end;
            gap: 10px;
            width: 100%;
            margin-top: 20px;

            &.open {
                display: flex;
            }

            a {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 480px) {
        .container-logo img {
            width: 80px;
        }

        nav a {
            font-size: 0.9rem;
        }

        .button-login {
            font-size: 0.9rem;
        }
    }
}
</style>
