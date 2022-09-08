
import Vue from 'vue'
import App from './App.vue'
import alanBtn from "@alan-ai/alan-sdk-web";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$alanBtnInstance = alanBtn({
  key: 'caa8fcaa9684ab6c71794ea64f242b6c2e956eca572e1d8b807a3e2338fdd0dc/stage',
  onCommand: (commandData) => {
    console.log(commandData);
    if (commandData.command === 'getMenu') 
    {
     document.getElementById('message').innerText = commandData.data[5].name;
    }
  }
});

