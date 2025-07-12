<template>
    <AppModal ref="openModal"/>
  <div>
    <!-- yggvhgn?\ -->
    <header :class="['w-full pt-[10px] h-[77px] fixed pb-[10px] z-[20] border-b border-[#7a7a7a] transition-all duration-300', isScrolled ? 'bg-black backdrop-blur-md shadow-md' : 'bg-transparent']">
      <div class="max-w-[1400px] mt-auto mb-auto mx-[20px]">
        <div></div>
        <div class="w-full flex justify-between items-center pt-[5px]">
          <div class="flex items-center gap-[80px] px-[30px]">
            <a href="/"><img src="./assets//images/HeaderLogotype.png" alt="logo" width="120" loading="lazy"></a>
            <div class="flex items-center header__card">
              <div class="flex items-center gap-[40px] header__list">
                <router-link v-for="(item, index) in items" :key="index" :to="item.path" class="py-[5px] px-[8px]" active-class="active">
                  <span class="text-white font-thin">{{ item.name }}</span>
                </router-link>
                <div class="w-[87px]" ref="dropdownRef">
                  <!-- Hozirgi til -->
                  <button @click="toggleDropdown"
                    class="flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#6c2dba] rounded cursor-pointer">
                    <img :src="flags[lang]" alt="flag" class="w-6 h-4 rounded" />
                    <span class="capitalize text-white">{{ lang }}</span>
                  </button>
                  <!-- Dropdown -->
                  <div v-show="show"
                    class="absolute z-30 mt-2 w-[87.51px] bg-[#6c2dba] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-[1.5px] border-[#6c2dba] ">
                    <ul>
                      <li v-for="(flag, code) in otherLanguages" :key="code"
                        class="flex items-center gap-2 px-4 py-2 cursor-pointer"
                        @click="changeLanguage(code)">
                        <img :src="flag" alt="flag" class="w-6 h-4 rounded" />
                        <span class="capitalize text-white">{{ code }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="tel: +998(33)2587358" class="py-[13px] px-[25px] bg-[#6c2dba] border-[1.5px] border-[#6c2dba] hover:bg-transparent rounded-[15px] text-[14px] text-white">+998 (33) 258 73 58</a>
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

import uzFlag from './assets/images/uz.png'
import enFlag from './assets/images/en.png'
import ruFlag from './assets/images/ru.png'

const { t, locale } = useI18n()
const lang = ref(locale.value)
const show = ref(false)
const dropdownRef = ref(null)
const openModal = ref('')

// setTimeout(() => {
//   openModal.value.openModal()
// }, 4000);

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
</style>