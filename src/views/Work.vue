<template>
    <AppModal ref="openModal" />
    <div class="w-full">
      <section id="work" class="py-[100px] bg-[#161616]"> 
        <div class="px-[20px]">
          <h1 class="text-white text-[35px] text-center font-bold mb-[80px]">{{ t('works.title') }}</h1>
          <div class="w-full grid gap-[40px] [grid-template-columns:repeat(3,_2fr)] px-[20px]">
            <div v-for="(item, index) in visibleWorks" :key="index" :to="item.path" class="text-white cursor-pointer pb-[10px]" @click="routerSite(item.title)">
                <h1 class="mb-[20px] font-bold">{{ item.title }}</h1>
                <img class="max-w-[100%] h-[220px] bg-cover bg-center bg-no-repeat rounded-[5px] transition-transform duration-300 ease-in-out hover:scale-110" :src="item.img" alt="">
                <p class="max-w-[100%] mt-[20px]">{{ item.text }}</p>
            </div>
          </div>
          <div class="text-center mt-[40px]">
            <button 
              @click="toggleShow"
              class=" mt-[32px] mx-auto px-[38px] py-[12px] text-[1.14rem] font-bold rounded-[18px] text-white cursor-pointer shadow-[0_4px_18px_#2b105522] transition-all duration-300 ease-in-out"
              style="background: linear-gradient(120deg, #6c2dba, #ff6b6b);"
              onmouseover="this.style.background='linear-gradient(120deg, #ff6b6b, #6c2dba)'"
              onmouseout="this.style.background='linear-gradient(120deg, #6c2dba, #ff6b6b)'"
            >
              {{ isAllShown ? '▲ ' + t('works.backToTop') : t('works.button') }}
            </button>
          </div>
  
        </div>
      </section>
      <!-- <RouterView /> -->
      <section id="order" class="bg-cover bg-center bg-no-repeat pt-[150px] pb-[100px] w-full h-[100%]" 
      style="background-image: url('/src/assets/images/order.jpg');">
        <div class="w-full flex gap-[0px] justify-center p-2">
          <div class="p-[20px] text-white">
            <h1 class="my-[20px] max-w-[615px] font-bold text-[35px]">{{ t('modal.title') }}</h1>
            <h2 class="text-[16px] text-[#6c2dba] font-semibold tracking-[0.5px] leading-[1.1] mt-[10px]">{{
              t('modal.subtitle') }}</h2>
            <div>
              <h1 class="text-[19px] font-bold my-[20px]">{{ t('home.order.pages') }}</h1>
              <router-link to="/" class="text-[#6c6c6c]">{{ t('home.header.title1') }}</router-link>
              <br>
              <p class="mb-[10px]"></p>
              <router-link to="/services" class="text-[#6c6c6c]">{{ t('home.header.title2') }}</router-link>
            </div>
          </div>
          <div class="w-[50%] p-[20px]">
            <h1 class="text-[32px] my-[20px] text-white">{{ t('modal.form.title') }}</h1>
            <form @submit.prevent="submitForm" class="w-full">
              <input type="text" v-model="form.name" :placeholder="t('modal.form.name')"
                class="w-full mt-[20px] bg-[#363636] py-[20px] px-[20px]  text-[13px] text-white outline-none border-none rounded-[25px] hover:border-black focus:border-blue-500"></input>
                <br>
              <input type="text" v-mask="'+998 (##) ### ## ##'" v-model="form.phone_number"
                placeholder="+998 (93) 893 67 07" class="w-full mt-[20px] border-none text-white py-[20px] pl-[20px] text-[13px] bg-[#363636] outline-none rounded-[25px] hover:border-black focus:border-blue-500"></input>
                <br>
              <textarea name="textarea" v-model="form.textarea" rows="6" :placeholder="t('modal.form.textarea')"
                class="w-full bg-[#363636] mt-[20px] py-[17px] px-[25px] text-[13px] text-white rounded-[25px] outline-none border-none hover:border-black focus:border-blue-500"></textarea>
              <button type="submit"
                class="bg-[#6c2dba] border-none rounded-[25px] text-[15px] w-[47.7%] text-center mt-[25px] py-[15px] cursor-pointer"
                @click="send">{{ t('modal.button') }}</button>
            </form>
          </div>
        </div>
      </section>
  
      <section id="contact" class="w-full bg-[#161616] py-[70px] px-[20px]">
        <div class="w-full px-[20px] text-white">
          <h1 class="text-white text-[40px] my-[32px]">{{ t('home.contact.title') }}</h1>
          <div class="w-full gap-[50px] flex justify-between items-center">
            <div class="grid gap-[30px] items-center grid-cols-2 [grid-template-columns:repeat(2,2fr)]">
              <div class="flex items-center gap-[20px]">
                <svg-icon type="mdi" class="w-[27px] h-[27px] mt-[10px] text-[#a1a1a1]"
                  :path="mdiMapMarkerOutline"></svg-icon>
                <div>
                  <h1 class="text-[18px] font-bold my-[14px]">{{ t('home.contact.address') }}</h1>
                  <p class="text-[#a1a1a1] text-[14px]">{{ t('home.contact.address2') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-[20px]">
                <svg-icon type="mdi" class="w-[27px] h-[27px] mt-[10px] text-[#a1a1a1]"
                  :path="mdiClockTimeThree"></svg-icon>
                <div>
                  <h1 class="text-[18px] font-bold my-[14px]">{{ t('home.contact.working-time') }}</h1>
                  <p class="text-[#a1a1a1] text-[14px]">{{ t('home.contact.week') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-[20px]">
                <svg-icon type="mdi" class="w-[27px] h-[27px] mt-[10px] text-[#a1a1a1]"
                  :path="mdiPhoneInTalkOutline"></svg-icon>
                <div>
                  <h1 class="text-[18px] font-bold my-[14px]">{{ t('home.contact.phone-number') }}</h1>
                  <a href="tel: +998 93 513 88 33" class="text-[#a1a1a1] text-[14px]">+998 (33) 258 73 58</a>
                </div>
              </div>
              <div class="flex items-center gap-[20px]">
                <svg-icon type="mdi" class="w-[27px] h-[27px] mt-[15px] text-[#a1a1a1]"
                  :path="mdiShareVariant"></svg-icon>
                <div>
                  <h1 class="text-[18px] font-bold my-[14px]">{{ t('home.contact.social-media') }}</h1>
                  <div class="flex gap-[5px]">
                    <a href="https://www.linkedin.com/company/limsa-2021/" class="text-[#a1a1a1] text-[14px]"><svg-icon
                        type="mdi" class="w-[27px] h-[27px]" :path="mdiLinkedin"></svg-icon></a>
                    <a href="https://www.instagram.com/limsa_uz" class="text-[#a1a1a1] text-[14px]"><svg-icon type="mdi"
                        class="w-[27px] h-[27px]" :path="mdiInstagram"></svg-icon></a>
                    <a href="https://t.me/the_rustambek" class="text-[#a1a1a1] text-[14px]"><svg-icon type="mdi"
                        class="w-[27px] h-[27px]" :path="mdiSend"></svg-icon></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[50%]">
              <iframe class="w-full h-[300px] rounded-[20px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.65547130854!2d69.28311021090116!3d41.33810459893217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1730879135357!5m2!1sru!2s"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
            </div>
          </div>
        </div>
      </section>
  
      <footer class="py-[20px]">
        <div class="px-[20px]">
          <div class="px-[20px] flex justify-between items-center">
            <a href="/"><img class="w-[150px]" src="/src/assets/images/Limsa - Logotypecolor2-DK-aqGj3.png" alt=""></a>
            <p class="text-white">© 2024 Limsa. {{ t('home.footer') }}</p>
          </div>
        </div>
      </footer>
    </div>
  
    <!-- ScrollTop Button -->
    <div v-if="showScrollTop" @click="scrollToTop"
      class="fixed bottom-[30px] right-[30px] z-[50] cursor-pointer transition-opacity duration-300 hover:opacity-80">
      <div class="w-[50px] h-[50px] rounded-full bg-[#6c2dba] flex items-center justify-center shadow-lg">
        <svg-icon type="mdi" :path="mdiArrowUpThick" class="text-white w-[27px] h-[27px]" />
      </div>
    </div>
  
  </template>
  
  <script setup>
  // import AOS from 'aos'
  // import 'aos/dist/aos.css'
  
  // AOS.init()
//   import { RouterView } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { ref, watch, computed, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
  import AppModal from '../Modal/AppModal.vue';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiMapMarkerOutline, mdiClockTimeThree, mdiPhoneInTalkOutline, mdiShareVariant, mdiLinkedin, mdiInstagram, mdiSend, mdiArrowUpThick } from '@mdi/js';
  import Notification from '../plugins/Notification'
  
  
  
  const { t, locale } = useI18n()
  const lang = ref(locale.value)
  const show = ref(false)
  const dropdownRef = ref(null)
  
  const works = computed(() => [
    {
      title: t('works.auto.title'),
      text: t('works.auto.text'),
      img: new URL('@/assets/images/avtozoomWebsite-DIxy4dc1.webp', import.meta.url).href
    },
    {
      title: t('works.academy.title'),
      text: t('works.academy.text'),
      img: new URL('@/assets/images/itTimeacademy.webp', import.meta.url).href
    },
    {
      title: t('works.uzloyal.title'),
      text: t('works.uzloyal.text'),
      img: new URL('../assets/images/loyalWebsite-D9tpp8LY.webp', import.meta.url).href
    },
    {
      title: t('works.propartnyor.title'),
      text: t('works.propartnyor.text'),
      img: new URL('../assets/images/propartnyor-uQTAyLvs.webp', import.meta.url).href
    },
    {
      title: t('works.zamontour.title'),
      text: t('works.zamontour.text'),
      img: new URL('../assets/images/zamonTour-024a6rAZ.webp', import.meta.url).href
    },
    {
      title: t('works.logistic.title'),
      text: t('works.logistic.text'),
      img: new URL('../assets/images/wtLogistic-DnsYO9xH.webp', import.meta.url).href
    },
    {
      title: t('works.aviatrip.title'),
      text: t('works.aviatrip.text'),
      img: new URL('../assets/images/nemoaviatrip-DIEcXYgH.webp', import.meta.url).href
    },
    {
      title: t('works.visatour.title'),
      text: t('works.visatour.text'),
      img: new URL('../assets/images/easyvisatour-DHk-YP-0.webp', import.meta.url).href
    },
    {
      title: t('works.aoron.title'),
      text: t('works.aoron.text'),
      img: new URL('../assets/images/aoron-BRkcmKsT.webp', import.meta.url).href
    },
    {
      title: t('works.edu.title'),
      text: t('works.edu.text'),
      img: new URL('../assets/images/psyedu-Bd1Vey72.webp', import.meta.url).href
    },
    {
      title: t('works.tourland.title'),
      text: t('works.tourland.text'),
      img: new URL('../assets/images/tourland-BZYJe8JM.webp', import.meta.url).href
    },
    {
      title: t('works.flymoderntour.title'),
      text: t('works.flymoderntour.text'),
      img: new URL('../assets/images/flymoderntour-D0zJM6w7.webp', import.meta.url).href
    },
    {
      title: t('works.tomu.title'),
      text: t('works.tomu.text'),
      img: new URL('../assets/images/tomu-BQWRWZzj.webp', import.meta.url).href
    },
    {
      title: t('works.tekgrup.title'),
      text: t('works.tekgrup.text'),
      img: new URL('../assets/images/tekgrup-7cCxsc8E.webp', import.meta.url).href
    },
    {
      title: t('works.uae.title'),
      text: t('works.uae.text'),
      img: new URL('../assets/images/luxlineuae-CUc5T-l1.webp', import.meta.url).href
    },
    {
      title: t('works.service.title'),
      text: t('works.service.text'),
      img: new URL('../assets/images/sigmaservis-CJc4qBUg.webp', import.meta.url).href
    },
    {
      title: t('works.car.title'),
      text: t('works.car.text'),
      img: new URL('../assets/images/jbscarrental-ClWs5drC.webp', import.meta.url).href
    },
    {
      title: t('works.assitech.title'),
      text: t('works.assitech.text'),
      img: new URL('../assets/images/assitech-C-5e7All.webp', import.meta.url).href
    },
    {
      title: t('works.nippon.title'),
      text: t('works.nippon.text'),
      img: new URL('../assets/images/nipponcom-DYzeP2LU.webp', import.meta.url).href
    },
    {
      title: t('works.ifly.title'),
      text: t('works.ifly.text'),
      img: new URL('../assets/images/iflycom-CsDm7x97.webp', import.meta.url).href
    },
  ])
  
  // Nechta ko'rsatiladi
  const showCount = ref(6)
  const isAllShown = ref(false)
  
  // Faqat kerakli qismi ko'rsatiladi
  const visibleWorks = computed(() => works.value.slice(0, showCount.value))
  
  const toggleShow = () => {
    if (!isAllShown.value) {
      if (showCount.value + 6 < works.value.length) {
        showCount.value += 6
      } else {
        showCount.value = works.value.length
        isAllShown.value = true
      }
    } else {
      showCount.value = 6
      isAllShown.value = false
  
      // 👇 ID bo‘yicha scroll qilish
      const section = document.getElementById('work')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  const routerSite = (url) => {
    let a = 'https://'
    let b = a+url
    console.log(b);
    window.open(b, '_blank')
  }
  
  let form = ref({
      name: '',
      phone_number: "",
      textarea: ''
  })
  
  const submitForm = () => {
    console.log(form.value.phone_number.length );
    if (form.value.name && form.value.name.length > 0) {
      if(form.value.phone_number && form.value.phone_number.length >= 19 ){
        if(form.value.textarea && form.value.textarea.length > 0){
          setTimeout(() => {
            Notification({ text: t('modal.notification') }, { type: "success" }, { time: "5000" }, { description: "" });
          }, 1000);
  
          setTimeout(() => {
            location.reload();
          }, 5000);
        } else {
          Notification({ text: "Iltimos, ma'lumotlarni to'liq kiriting!" }, { type: "danger" }, { time: "5000" }, { description: "" });
        }
      } else {
          Notification({ text: "Iltimos, ma'lumotlarni to'liq kiriting!" }, { type: "danger" }, { time: "5000" }, { description: "" });
      }
    } else {
      Notification({ text: "Iltimos, ma'lumotlarni to'liq kiriting!" }, { type: "danger" }, { time: "5000" }, { description: "" });
    }
  }
  
  const handleClickOutside = (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
      show.value = false
    }
  }
  const showScrollTop = ref(false)
  
  const handleScroll = () => {
    showScrollTop.value = window.scrollY > 400 // 400px dan keyin chiqadi
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  watch(lang, (val) => {
    locale.value = val
    localStorage.setItem('locale', val)
  });
  
  </script>
  
  <style lang="scss" scoped>
  @keyframes scrollLeftToRight {
    0% {
      transform: translateX(-100%);
      /* Chap tomondan chiqadi */
    }
  
    100% {
      transform: translateX(100%);
      /* O‘ng tomonga chiqib ketadi */
    }
  }
  
  .scrolling-text {
    animation: scrollLeftToRight 15s linear infinite;
    will-change: transform;
  }
  </style>