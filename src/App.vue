<template>
  <AppModal ref="openModal" />
  <div>
    <!-- yggvhgn?\ -->
    <header
      :class="['w-full pt-[10px] h-[77px] fixed pb-[10px] z-[20] border-b border-[#7a7a7a] transition-all duration-300', isScrolled ? 'bg-black backdrop-blur-md shadow-md' : 'bg-transparent']">
      <div class="max-w-[1400px] mt-auto mb-auto mx-[20px]">
        <div></div>
        <div class="w-full flex justify-between items-center pt-[5px] header-nav">
          <div class="flex items-center gap-[80px] px-[30px]">
            <a href="/"><img src="./assets//images/HeaderLogotype.png" alt="logo" width="120" loading="lazy"></a>
            <div class="flex items-center header__card">
              <div class="flex items-center gap-[40px] nav">
                <router-link v-for="(item, index) in items" :key="index" :to="item.path"
                  class="py-[5px] px-[8px] header-router" active-class="active">
                  <span class="text-white font-thin ">{{ item.name }}</span>
                </router-link>
                <div class="w-[87px]" ref="dropdownRef">
                  <!-- Hozirgi til -->
                  <button @click="toggleDropdown"
                    class="flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#6c2dba] rounded-[8px] cursor-pointer">
                    <img :src="flags[lang]" alt="flag" class="w-6 h-4 rounded" />
                    <span class="capitalize text-white">{{ lang }}</span>
                  </button>
                  <!-- Dropdown -->
                  <div v-show="show"
                    class="absolute z-30 mt-2 w-[87.51px] bg-[#6c2dba] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-[1.5px] border-[#6c2dba] ">
                    <ul>
                      <li v-for="(flag, code) in otherLanguages" :key="code"
                        class="flex items-center gap-2 px-4 py-2 cursor-pointer" @click="changeLanguage(code)">
                        <img :src="flag" alt="flag" class="w-6 h-4 rounded" />
                        <span class="capitalize text-white">{{ code }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="phone">
            <a href="tel: +998(33)2587358"
              class="py-[13px] px-[25px] bg-[#6c2dba] border-[1.5px] border-[#6c2dba] hover:bg-transparent rounded-[15px] text-[14px] text-white">+998
              (33) 258 73 58</a>
          </div>
          <div class="hidden button" @click="isOpen = !isOpen">
            <button><svg-icon type="mdi" class="text-white w-[35px] h-[35px]" :path="mdiMenu"></svg-icon></button>
          </div>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false"
        class="fixed inset-0 z-0 transition-opacity opacity-50 lg:hidden" style="background: rgba(0, 0, 0, 0.6)">
      </div>
      <div :class="isOpen ? 'block' : 'hidden'">
        <div :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
          class="w-[222px] h-screen fixed top-0 bottom-0 left-0 z-20 overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static bg-black flex flex-col">
          <div class="flex items-center justify-between bg-black py-[20px]">
            <h1></h1>
            <button><svg-icon type="mdi" class="text-white w-[30px] h-[30px] mr-[20px]" @click="isOpen = !isOpen"
                :path="mdiCloseThick"></svg-icon></button>
          </div>
          <hr>
          <div class="mt-[20px] w-full ">
            <div class="w-full  text-center">
              <router-link v-for="(item, index) in items" :key="index" :to="item.path"
                class="py-[5px] px-[8px] flex w-full items-center my-[5px] header-router " active-class="active">
                <span class="text-white ml-[10px] font-medium" @click="isClose">{{ item.name }}<br></span>
              </router-link>
            </div>
            <div class="w-[87px] ml-[17px] mt-[20px]" ref="dropdownRef">
              <!-- Hozirgi til -->
              <button @click="toggleDropdown"
                class="flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#6c2dba] rounded-[8px] cursor-pointer">
                <img :src="flags[lang]" alt="flag" class="w-6 h-4 rounded" />
                <span class="capitalize text-white">{{ lang }}</span>
              </button>
              <!-- Dropdown -->
              <div v-show="show"
                class="absolute z-30 mt-2 w-[87.51px] bg-[#6c2dba] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-[1.5px] border-[#6c2dba] ">
                <ul>
                  <li v-for="(flag, code) in otherLanguages" :key="code"
                    class="flex items-center gap-2 px-4 py-2 cursor-pointer" @click="changeLanguage(code)">
                    <img :src="flag" alt="flag" class="w-6 h-4 rounded" />
                    <span class="capitalize text-white">{{ code }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex justify-center text-end absolute bottom-0 bg-black py-[20px]">
            <a href="tel: +998(33)2587358"
              class="py-[13px] px-[25px] bg-[#6c2dba] border-[1.5px] border-[#6c2dba] hover:bg-transparent rounded-[15px] text-[14px] text-white">+998
              (33) 258 73 58</a>
          </div>
        </div>
      </div>
    </header>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import AppModal from './Modal/AppModal.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu, mdiCloseThick } from '@mdi/js';


import uzFlag from './assets/images/uz.png'
import enFlag from './assets/images/en.png'
import ruFlag from './assets/images/ru.png'

const { t, locale } = useI18n()
const lang = ref(locale.value)
const show = ref(false)
const dropdownRef = ref(null)
const openModal = ref('')
const isOpen = ref(false)

const isClose = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 100);
}

const items = computed(() => [
  {
    path: '/',
    name: t('home.header.title1'),
  },
  {
    path: '/services',
    name: t('home.header.title2'),
  },
  {
    path: '/work',
    name: t('home.header.title3'),
  },
  {
    path: '/prices',
    name: t('home.header.title4'),
  },
])

const toggleDropdown = () => {
  show.value = !show.value
}
const otherLanguages = computed(() => {
  const copy = { ...flags }
  delete copy[lang.value]
  return copy
})
const changeLanguage = (code) => {
  lang.value = code
  locale.value = code
  localStorage.setItem('locale', code)
  show.value = false
}

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    show.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})

watch(lang, (val) => {
  locale.value = val
  localStorage.setItem('locale', val)
});

const flags = {
  uz: uzFlag,
  en: enFlag,
  ru: ruFlag
}

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
});

</script>

<style lang="scss" scoped>
.active {
  border-bottom: 2px solid #6c2dba;
  border-radius: 6px;
}

@media (max-width: 1190px) {
  .header-nav {

    /* justify-content: space-around; */
    /* gap: 0px; */
    .phone {
      display: none;
    }
  }

  .header__card {
    .header-router {
      /* display: none; */
    }
  }
}

@media (max-width: 1000px) {
  .header__card {
    display: none;
  }

  .button {
    display: block;
    text-align: center;
    margin-top: 5px;
    /* margin-left: 400px; */
  }

  .sidebar {
    display: block;
  }
}
</style>