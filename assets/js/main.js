import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy';
import 'buefy/dist/buefy.css'

const app = document.querySelector("#app")

if (app) {
    // if (gameContainer) {
    //     new Vue({
    //       el: '#app',
    //       template: '<App/>',
    //       components: { App }
    //     })
    //   }

    Vue.use(Buefy)
    Vue.config.productionTip = false

    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
}
