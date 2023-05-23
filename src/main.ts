import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// vuetify
import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles'
import { mdi } from "vuetify/iconsets/mdi";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        sets: { mdi }
    }
});

createApp(App).use(vuetify).mount('#app')
