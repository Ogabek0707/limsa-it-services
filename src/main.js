import './assets/main.css'

import en from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import veeValidatePlugins from './plugins/vee-validate'
import VueTheMask from "vue-the-mask"
import AOS from 'aos'
import 'aos/dist/aos.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || 'uz',
    fallbackLocale: 'en',
    messages: { uz, en, ru }
  })  

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(veeValidatePlugins)
app.use(VueTheMask)

app.mount('#app')

AOS.init({
  duration: 800,        // animatsiya davomiyligi
  once: true,           // faqat bir marta ishlaydi
  offset: 100           // element yuqoridan necha px pastda paydo bo‘lsa animatsiya boshlanadi
})
