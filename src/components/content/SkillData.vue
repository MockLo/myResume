<template>
  <BlockContent name="专业技能">
    <div class="resume-skill-detail">
      <ul>
        <li v-for="(item, i) in skillList" :key="i">{{ item }}</li>
      </ul>
    </div>
  </BlockContent>
</template>

<script setup>
import { useResume } from '../../useResume';
import BlockContent from '../BlockContent.vue';

const { skillList } = useResume();
</script>

<style lang="scss" scoped>
.resume-skill-detail {
}
</style>
