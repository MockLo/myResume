<template>
  <BlockContent name="工作经历">
    <div class="resume-jobs-details">
      <JobBlock v-for="(item, i) in jobList" :key="i" :data="item" />
    </div>
  </BlockContent>
</template>

<script setup>
import { useResume } from '../../useResume';
import BlockContent from '../BlockContent.vue';
import JobBlock from '../JobBlock.vue';

const { jobList } = useResume();
</script>

<style lang="scss" scoped>
.resume-jobs {
  &-details {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
}
</style>
