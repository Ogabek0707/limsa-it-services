<template>
    <AppModal v-model="dialog">
        <div class="w-full flex gap-[20px] p-2">
            <div class="max-w-[525px] p-[20px] text-white">
                <h1 class="my-[20px] font-bold text-[35px]">{{ t('modal.title') }}</h1>
                <h2 class="text-[16px] text-[#6c2dba] font-semibold tracking-[0.5px] leading-[1.1] mt-[10px]">{{ t('modal.subtitle') }}</h2>
            </div>
            <div class="w-[50%] p-[20px]">
                <h1 class="text-[32px] my-[20px] text-white">{{ t('modal.form.title') }}</h1>
                <vee-form :validation-schema="schema" :initial-values="forms" @submit="send" class="w-full text-center m-auto">
                    <VInput type="text" color="color" label="" name="Name" :placeholder="t('modal.form.name')" class="mt-[20px]"></VInput>
                    <VTell type="text" color="color" label="" name="Tell" mask="+998 (##) ### ## ##" placeholder="+998 (93) 893 67 07" class="mt-[20px] border-none text-white"></VTell>
                    <textarea name="textarea" id="" rows="6" :placeholder="t('modal.form.textarea')" class="w-full bg-[#363636] mt-[20px] py-[17px] px-[25px] text-[13px] text-white rounded-[25px] outline-none border-none hover:border-black focus:border-blue-500"></textarea>
                    <VButton type="submit" class="bg-[#6c2dba] border-none rounded-[25px] text-[15px] w-[47.7%] text-center mt-[25px] mb-[20px] py-[15px]"  @click="send">{{ t('modal.button') }}</VButton>
                </vee-form>
            </div>
        </div>
    </AppModal>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppModal from '@/components/ui/app-modal.vue';
import { ref, computed, watch } from 'vue';
import VInput from '@/components/form/VInput.vue';
import VButton from '@/components/form/VButton.vue';
import VTell from '@/components/form/VTell.vue';
import Notification from '../plugins/Notification'

const dialog = ref(false)

let forms = ref({
    Name: "",
    Email: "",
    Tell: ""
})

const schema = computed(()=>{
  return {
    Name: 'required|min:0|max:25',
    Tell: 'required|min:0|max:20',
    // Textarea: 'required|min:0|max:150',
  }
})

const send = (value) => {
    console.log(value);
    if(value.Name){
        setTimeout(() => {
            dialog.value = false
            Notification({text: t('modal.notification')}, {type: "success"},{time: "5000"}, {description: ""})
            // location.reload()
        }, 1000);
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
defineExpose({openModal});
</script>

<style lang="scss" scoped>

</style>