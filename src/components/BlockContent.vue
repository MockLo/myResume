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
    border: 1px solid #000;
    border-top: none;
    pointer-events: none;
  }

  &-container {
    margin: 10px 20px;
  }
}
</style>
