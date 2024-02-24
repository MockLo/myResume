<template>
  <div class="resume-body">
    <div class="resume-jobs">
      <BlockHeader name="工作经历" />
      <JobBlock v-for="(item, i) in jobList" :key="i" :data="item" />
    </div>

    <div class="resume-skills">
      <BlockHeader name="专业技能" />
      <div class="resume-skill-detail">
        <ul>
          <li v-for="(item, i) in skillList" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlockHeader from './BlockHeader.vue';
import JobBlock from './JobBlock.vue';
import { useResume } from '../useResume';

const { jobList, skillList } = useResume();
</script>

<style lang="scss" scoped>
.resume-body {
  padding: 1em 2em 4em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ::v-deep {
    ul {
      padding-inline-start: 1em;
    }
  }
}

.resume-skills {
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.4px;

  li {
    margin-top: 0.5em;
  }
}

.resume-skill-detail {
  padding: 1em;
  background: rgba(#76bbd0, 0.2);
  border-radius: 6px;
}
</style>
