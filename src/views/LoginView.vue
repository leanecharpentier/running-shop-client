<script setup>
import { login } from "@/services/auth.services";

import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

async function handleSubmit() {
    try {
        await login({ email: email.value, password: password.value });
        router.push("/");
    } catch (error) {
        errorMessage.value = error.message || t("login.error");
    }
}
</script>

<template>
    <main>
        <section class="section-1">
            <h1>{{ t("login.title") }}</h1>
            <form @submit.prevent="handleSubmit" class="flex-col">
                <input type="email" id="email" v-model="email" :placeholder="t('login.email')" required />
                <input
                    type="password"
                    id="password"
                    v-model="password"
                    :placeholder="t('login.password')"
                    required
                />
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                <button type="submit" class="btn-submit">{{ t("login.button") }}</button>
            </form>
        </section>
        <section class="section-2">
            <img src="../assets/images/clothesImg.jpg" alt="" />
        </section>
    </main>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss" as *;
main {
    display: flex;
    flex-direction: row;
    height: 100vh;

    h1,
    h2 {
        text-transform: uppercase;
        font-family: "Koulen", sans-serif;
        font-size: 1.4rem;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .section-1 {
        width: 60vw;
        background-color: $beige;
        gap: 30px;
        padding: 0 10%;
        @media (max-width: 768px) {
            width: 100vw;
        }
        form {
            gap: 20px;
            width: 100%;
            input {
                width: 100%;
                border: none;
                border-radius: 100px;
                padding: 8px 24px;
            }
            .btn-submit {
                font-family: "Koulen", sans-serif;
                background-color: $black;
                color: $white;
                padding: 8px 40px;
                border-radius: 100px;
                text-decoration: none;
                white-space: nowrap;
                border: none;
            }
            .error-message {
                color: red;
                font-size: 0.9rem;
                margin-top: 10px;
                text-align: center;
            }
        }
    }
    .section-2 {
        width: 40vw;
        background-color: $green-light;
        overflow: hidden;
        img {
            width: 100%;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
}
</style>
