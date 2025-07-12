<template>
    <!-- Modal qora fon (shadow) -->
    <app-transition>
      <div
        v-if="modelValue"
        class="app-modal-shadow"
        @click="$emit('update:modelValue', false)"
      ></div>
    </app-transition>
  
    <!-- Modal content -->
    <div
      class="app-modal"
      :style="{ width: width }"
      :class="{ 'app-modal-show': modelValue }"
    >
      <app-transition>
        <div v-if="modelValue" class="app-modal__body">
          <slot></slot>
        </div>
      </app-transition>
    </div>
  </template>
  
  <script setup>
  import AppTransition from "./app-transition.vue";
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .app-modal {
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 65%;
    max-height: 700px;
    background: rgba(0, 0, 0, 0.6);         // modal fonini qoraytiradi
    backdrop-filter: blur(10px);           // orqa fonni biroz ko‘rsatadi
    -webkit-backdrop-filter: blur(10px);
    z-index: -1;
    opacity: 0;
    overflow: auto;
    border-radius: 1rem;
  }
  .app-modal-show {
    opacity: 1;
    z-index: 1001; // Headerdan yuqori bo‘lishi kerak
  }
  .app-modal-shadow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000; // Header (20) dan yuqori
    background: rgba(0, 0, 0, 0.4); /* Qorayish */
    backdrop-filter: blur(4px); /* HIRA effekt */
    -webkit-backdrop-filter: blur(8px); /* Safari uchun */

  }
  ::-webkit-scrollbar {
    display: none;
  }
  
@media (max-width: 427px) {
    .app-modal{
        width: 80%;
    }
}
@media (max-width: 590px) {
    .app-modal{
        width: 70%;
    }
}
@media (max-width: 760px) {
    .app-modal{
        width: 60%;
    }
}
</style>