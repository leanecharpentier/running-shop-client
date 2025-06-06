<script setup>
import { useI18n } from "vue-i18n";

import MainHeader from "../components/MainHeader.vue";

const { t } = useI18n();
</script>

<template>
    <MainHeader :title="t('home.title')" />
</template>

<style scoped lang="scss">
@use "../assets/variables.scss" as *;

</style>