import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import "./assets/main.scss";
import router from "./router";

// charger les messages dynamiquement
async function loadLocaleMessages(locale = "fr") {
    const response = await fetch(`/locales/${locale}.json`);
    const messages = await response.json();
    return messages;
}

async function initApp() {
    const locale = "fr";
    const messages = await loadLocaleMessages(locale);

    const i18n = createI18n({
        legacy: false,
        locale,
        fallbackLocale: "en",
        messages: {
            [locale]: messages,
        },
    });

    const app = createApp(App);
    app.use(PrimeVue);
    app.use(createPinia());
    app.use(router);
    app.use(i18n);

    app.mount("#app");
}

initApp();
