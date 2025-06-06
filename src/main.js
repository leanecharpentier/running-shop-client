import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import "./assets/main.css";
import "./assets/main.scss";
import en from "../public/locales/en.json";
import fr from "../public/locales/fr.json";
import router from "./router";

library.add(faEdit, faTrash);

const i18n = createI18n({
    legacy: false,
    locale: "fr",
    fallbackLocale: "en",
    messages: { en, fr },
});

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(PrimeVue);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
