<template>
  <AppModal ref="openModal" />
  <div class="w-full">

    <!-- bg-[#161616] -->
    <section id="services" class="bg-[#161616]">
      <div class="pt-[130px] flex justify-center">
        <h1 class="w-[180px] text-white py-[15px] px-[20px] border border-[#6c2dba] rounded-[20px] text-center">{{ t('services.title') }}</h1>
      </div>

      <div class="w-full px-[20px] pt-[30px]" id="services-animation" :class="[
          'transition-all ease-out duration-1000',
          isVisibleServices
            ? 'opacity-100 translate-y-0 delay-[300ms]'
            : 'opacity-0 -translate-y-20'
        ]">
        <div class="w-full px-[20px] text-white">
          <div class="m-auto max-w-[1000px]">
            <h1 class="text-center font-bold text-[40px]">{{ t('home.services.title') }}</h1>
            <p class="text-center text-[40px] text-[#6c2dba] my-[20px] font-bold">{{ t('home.services.text') }}</p>
          </div>
          <div class="w-full mt-[50px] flex gap-[20px] justify-around items-center flex-wrap">
            <div class="bg-black w-[30%] p-[35px] rounded-[15px] flex">
              <div>
                <svg-icon type="mdi" class="text-white w-[50px] h-[50px]" :path="mdiCellphoneLink"></svg-icon>
                <p class="text-[24px] my-[24px]">01</p>
              </div>
              <div class="ml-[30px]">
                <h1 class="text-[22px] font-bold">{{ t('home.services.card1.title') }}</h1>
                <p class="text-[12px] leading-[25px] max-w-[300px] my-[12px]" style="color: rgb(177, 177, 177)">{{
                  t('home.services.card1.text') }}</p>
              </div>
            </div>
            <div class="bg-black w-[30%] p-[35px] rounded-[15px] flex">
              <div>
                <svg-icon type="mdi" class="text-white w-[50px] h-[50px] ml-[-10px]"
                  :path="mdiAccountKeyOutline"></svg-icon>
                <p class="text-[24px] my-[24px]">02</p>
              </div>
              <div class="ml-[30px]">
                <h1 class="text-[22px] font-bold">{{ t('home.services.card2.title') }}</h1>
                <p class="text-[12px] leading-[25px] max-w-[300px] my-[12px]" style="color: rgb(177, 177, 177)">{{
                  t('home.services.card2.text') }}</p>
              </div>
            </div>
            <div class="bg-black w-[30%] p-[35px] rounded-[15px] flex">
              <div>
                <svg-icon type="mdi" class="text-white w-[50px] h-[50px] ml-[-10px]"
                  :path="mdiShieldPlusOutline"></svg-icon>
                <p class="text-[24px] my-[24px]">03</p>
              </div>
              <div class="ml-[30px]">
                <h1 class="text-[22px] font-bold">{{ t('home.services.card3.title') }}</h1>
                <p class="text-[12px] leading-[25px] max-w-[300px] my-[12px]" style="color: rgb(177, 177, 177)">{{
                  t('home.services.card3.text') }}</p>
              </div>
            </div>
            <div class="bg-black w-[30%] p-[35px] rounded-[15px] flex">
              <div>
                <svg-icon type="mdi" class="text-white w-[50px] h-[50px] ml-[-10px]" :path="mdiHeadphones"></svg-icon>
                <p class="text-[24px] my-[24px]">04</p>
              </div>
              <div class="ml-[30px]">
                <h1 class="text-[22px] font-bold">{{ t('home.services.card4.title') }}</h1>
                <p class="text-[12px] leading-[25px] max-w-[300px] my-[12px]" style="color: rgb(177, 177, 177)">{{
                  t('home.services.card4.text') }}</p>
              </div>
            </div>
            <div class="bg-black w-[30%] p-[35px] rounded-[15px] flex">
              <div>
                <svg-icon type="mdi" class="text-white w-[50px] h-[50px]" :path="mdiDomain"></svg-icon>
                <p class="text-[24px] my-[24px]">05</p>
              </div>
              <div class="ml-[30px]">
                <h1 class="text-[22px] font-bold">{{ t('home.services.card5.title') }}</h1>
                <p class="text-[12px] leading-[25px] max-w-[300px] my-[12px]" style="color: rgb(177, 177, 177)">{{
                  t('home.services.card5.text') }}</p>
              </div>
            </div>
            <div class="bg-black w-[30%] p-[35px] rounded-[15px] flex">
              <div>
                <svg-icon type="mdi" class="text-white w-[50px] h-[50px] ml-[-10px]" :path="mdiWeb"></svg-icon>
                <p class="text-[24px] my-[24px]">06</p>
              </div>
              <div class="ml-[30px]">
                <h1 class="text-[22px] font-bold">{{ t('home.services.card6.title') }}</h1>
                <p class="text-[12px] leading-[25px] max-w-[300px] my-[12px]" style="color: rgb(177, 177, 177)">{{
                  t('home.services.card6.text') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RouterView />


    <section id="order" class="bg-cover bg-center bg-no-repeat pt-[150px] pb-[100px] w-full h-[100%]"
      >
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
          <!-- <vee-form :validation-schema="schema" :initial-values="forms" @submit="send" class="w-full text-center m-auto"> -->

          <!-- </vee-form> -->
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
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, watch, computed, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import AppModal from '../Modal/AppModal.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCellphoneLink, mdiAccountKeyOutline, mdiShieldPlusOutline, mdiHeadphones, mdiDomain, mdiWeb, mdiMapMarkerOutline, mdiClockTimeThree, mdiPhoneInTalkOutline, mdiShareVariant, mdiLinkedin, mdiInstagram, mdiSend, mdiArrowUpThick } from '@mdi/js';
import VInput from '@/components/form/VInput.vue';
import VButton from '@/components/form/VButton.vue';
import VTell from '@/components/form/VTell.vue';
import Notification from '../plugins/Notification'


const { t, locale } = useI18n()
const lang = ref(locale.value)
const openModal = ref('')

let form = ref({
    name: '',
    phone_number: "",
    textarea: ''
})

// const schema = computed(() => {
//   return {
//     Name: 'required|min:0|max:25',
//     Tell: 'required|min:0|max:20',
//     // Textarea: 'required|min:0|max:150',
//   }
// })

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


const isVisibleServices = ref(false)

let observer = null

onMounted(() => {
  const target = document.querySelector('#services-animation')

  if (!target) return

  observer = new IntersectionObserver(
    ([entry]) => {
      // Faqat bir marta ishga tushadi
      if (entry.isIntersecting) {
        isVisibleServices.value = true
        observer.disconnect() // faqat 1 marta bo'lishi uchun kuzatuvni to‘xtatamiz
      }
    },
    {
      threshold: 0.3, // 30% ko‘rinadigan bo‘lsa animatsiya boshlanadi
    }
  )

  observer.observe(target)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})


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