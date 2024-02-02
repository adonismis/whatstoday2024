import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'

Vue.config.productionTip = false

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#app')

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
