import Vue from 'vue'
import App from './App.vue'
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';


// loads the Icon plugin
// UIkit.use(Icons);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
