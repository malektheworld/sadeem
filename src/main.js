import { createApp } from 'vue'
import App from './App.vue'
import BasePargraph from './components/BasePargraph.vue';
import BaseHeader from './components/BaseHeader.vue';
import BaseButton from './components/BaseButton.vue';


const app = createApp(App)
app.component('base-pargraph', BasePargraph);
app.component('base-header', BaseHeader);
app.component('base-button', BaseButton);

app.mount('#app');