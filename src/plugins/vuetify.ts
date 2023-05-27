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

export default vuetify;