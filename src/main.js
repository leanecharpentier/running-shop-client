import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import "./assets/main.scss";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import router from "./router";

const i18n = createI18n({
    legacy: false,
    locale: "fr",
    fallbackLocale: "en",
    messages: { en, fr },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
