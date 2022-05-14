import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import { quillEditor } from 'vue3-quill'
createApp(App).use(store,VueAxios,quillEditor).use(router).mount('#app')
