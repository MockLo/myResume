<script setup>
import ResumeHeader from './components/ResumeHeader.vue';
import ResumeBody from './components/ResumeBody.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('请使用 794 * 1123 尺寸，模拟 A4 纸张大小!');
});
</script>

<template>
  <main class="my-resume">
    <ResumeHeader />
    <ResumeBody />
  </main>
</template>

<style scoped></style>
