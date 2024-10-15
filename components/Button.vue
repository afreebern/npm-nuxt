<template>
  <button :style="{ backgroundColor: color }">
    <!-- Dynamic Content -->
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: "#2fa",
  },
});
</script>
