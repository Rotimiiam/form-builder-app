require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';
import 'v-form-builder/dist/v-form-builder.css'; 
import {VueFormBuilderPlugin} from 'v-form-builder';







Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.use(PortalVue);
Vue.use(VueFormBuilderPlugin );


const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);


