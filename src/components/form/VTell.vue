
<template>
      <div class="flex flex-col">
            <label :for="name" class="text-black font-[500] text-[20px] block">{{ label }}</label>
            <vee-field :id="name" v-if="mask" v-model="phone" :type="type" autocomplete="tel" masked="true" v-mask="mask" :name="name"
                  :placeholder="placeholder"
                  class="py-[20px] pl-[20px] text-[13px] bg-[#363636] outline-none rounded-[25px] mt-1.5 hover:border-black focus:border-blue-500" />
            <vee-field :id="name" v-else v-model="phone" :type="type" autocomplete="tel" :name="name" :placeholder="placeholder"
                  class="py-[20px] pl-[20px] text-[13px] bg-[#363636] outline-none rounded-[25px] mt-1.5 hover:border-black focus:border-blue-500" />
            <ErrorMessage :name="name" class="text-red-600 mt-2 ml-4 mb-[-5px] text-[17px] font-medium text-start" />
      </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
      type: {
            type: String,
      },
      name: {
            type: String
      },
      label: {
            type: String
      },
      placeholder: {
            type: String
      },
      mask: {
            type: String
      }
})
const phone = ref('');
watch(phone, (newVal, oldVal) => {
      phone.value = newVal ? `+998 ${newVal}` : '';
});
</script>

<style lang="scss" scoped></style>