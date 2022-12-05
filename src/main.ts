import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import initIcons from "@/services/icons.service";

import App from "./App.vue";
import routes from "./routes";

import "./assets/main.css";

const app = createApp( App );

app.use( createPinia() );
app.use( routes );

initIcons();
app.component( "FontAwesomeIcon", FontAwesomeIcon );


app.mount( "#app" );
