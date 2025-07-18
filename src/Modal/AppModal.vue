<template>
    <AppModal v-model="dialog">
        <div class="w-full flex gap-[20px] p-2 card">
            <div class="max-w-[525px] p-[20px] text-white container">
                <h1 class="my-[20px] font-bold text-[35px]">{{ t('modal.title') }}</h1>
                <h2 class="text-[16px] text-[#6c2dba] font-semibold tracking-[0.5px] leading-[1.1] mt-[10px]">{{
                    t('modal.subtitle') }}</h2>
            </div>
            <div class="w-[50%] p-[20px] form">
                <h1 class="text-[32px] my-[20px] text-white">{{ t('modal.form.title') }}</h1>
                <form @submit.prevent="submitForm" class="w-full">
                    <input type="text" v-model="form.name" :placeholder="t('modal.form.name')"
                        class="w-full mt-[20px] bg-[#363636] py-[20px] px-[20px]  text-[13px] text-white outline-none border-none rounded-[25px] hover:border-black focus:border-blue-500"></input>
                    <br>
                    <input type="text" v-mask="'+998 (##) ### ## ##'" v-model="form.phone_number"
                        placeholder="+998 (93) 893 67 07"
                        class="w-full mt-[20px] border-none text-white py-[20px] pl-[20px] text-[13px] bg-[#363636] outline-none rounded-[25px] hover:border-black focus:border-blue-500"></input>
                    <br>
                    <textarea name="textarea" v-model="form.textarea" rows="6" :placeholder="t('modal.form.textarea')"
                        class="w-full bg-[#363636] mt-[20px] py-[17px] px-[25px] text-[13px] text-white rounded-[25px] outline-none border-none hover:border-black focus:border-blue-500"></textarea>
                    <button type="submit"
                        class="bg-[#6c2dba] border-none rounded-[25px] text-[15px] w-[47.7%] text-center mt-[25px] py-[15px] cursor-pointer"
                        @click="send">{{ t('modal.button') }}</button>
                </form>
            </div>
        </div>
    </AppModal>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppModal from '@/components/ui/app-modal.vue';
import { ref, computed, watch } from 'vue';
import Notification from '../plugins/Notification'

const dialog = ref(false)

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

const { t, locale } = useI18n()
const lang = ref(locale.value)

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

watch(lang, (val) => {
    locale.value = val
    localStorage.setItem('locale', val)
});

const openModal = () => {
    dialog.value = true
}
defineExpose({ openModal });
</script>

<style lang="scss" scoped>
@media (max-width: 1400px) {
  .container {
    max-width: 500px;
    h1 {
      font-size: 30px;
    }
  }
  .form {
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .container {
    /* max-width: 500px; */
    h1 {
      font-size: 25px;
    }
  }
  .form {
    width: 100%;
    h1 {
      font-size: 28px;
    }
  }
}
@media (max-width: 1000px) {
  .container {
    /* max-width: 500px; */
    h1 {
      font-size: 22px;
    }
  }
  .form {
    width: 100%;
    h1 {
      font-size: 25px;
    }
  }
}
@media (max-width: 900px) {
  .card {
    flex-wrap: wrap;
    gap: 0px;
  }
  .container {
    max-width: 100%;
    margin: auto;
    h1 {
      font-size: 20px;
      text-align: center;
    }
    h2 {
      text-align: center;
    }
  }
  .form {
    width: 100%;
    padding: 0px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
}
</style>