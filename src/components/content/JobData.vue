<template>
  <div class="resume-jobs">
    <BlockHeader name="工作经历" />

    <div class="resume-jobs-details">
      <JobBlock v-for="(item, i) in jobList" :key="i" :data="item" />
    </div>
  </div>
</template>

<script setup>
import { useResume } from '../../useResume';
import BlockHeader from '../BlockHeader.vue';
import JobBlock from '../JobBlock.vue';

const { jobList } = useResume();
</script>

<style lang="scss" scoped>
.resume-jobs {
  &-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
