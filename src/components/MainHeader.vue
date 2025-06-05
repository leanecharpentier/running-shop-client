<script setup>
import NavBar from "./NavBar.vue";

defineProps({
    title: {
        typee: String,
        require: true,
    },
});
</script>

<template>
    <header>
        <div class="content">
            <NavBar class="nav-bar" />
            <h1>{{ title }}</h1>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss" as *;

header {
    position: relative;
    background-image: url("../assets/images/home-banner.jpg");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $green-dark;
        opacity: 0.5;
        pointer-events: none;
        z-index: 1;
    }
    .content {
        position: relative;
        z-index: 2;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Espace entre les éléments */
        align-items: center; /* Centre horizontalement */
        height: 100%; /* Prend toute la hauteur disponible */

        .nav-bar {
            align-self: flex-start; /* Place le NavBar en haut */
        }

        h1 {
            flex: 1; /* Prend tout l'espace restant */
            display: flex;
            justify-content: center; /* Centre horizontalement le texte */
            align-items: center; /* Centre verticalement le texte */
            font-size: 2.5rem;
            color: $white;
            text-transform: uppercase;
        }
    }
}
</style>
