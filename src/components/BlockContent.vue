<template>
  <div class="block-content">
    <BlockHeader :name="name" />

    <div class="block-content-container">
      <slot />
    </div>
  </div>
</template>

<script setup>
import BlockHeader from './BlockHeader.vue';

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.block-content {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 26px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    z-index: -1;
  }

  &-container {
    margin: 10px 20px;
  }
}
</style>
