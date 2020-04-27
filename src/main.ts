import Vue from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import App from './App.vue';
import store from './store';
// import router from './router';

Vue.component('btn', BaseButton);

Vue.config.productionTip = false;

new Vue({
    // router,
    store,
    render: (h) => h(App),
}).$mount('#app');
