<template>
  <div class="block-header">
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.block-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  span {
    width: fit-content;
    min-width: 50px;
    padding: 0.3em 2em;
    margin: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    text-align: center;
    font-size: 22px;
    letter-spacing: 2px;
    font-family: deyihei;
    font-weight: 700;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    flex-grow: 1;
    background-color: #000;
  }
}
</style>
