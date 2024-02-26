<template>
  <div class="resume-body">
    <PersonData />

    <EducationData />

    <JobData />

    <SkillData />
  </div>
</template>

<script setup>
import PersonData from './content/PersonData.vue';
import EducationData from './content/EducationData.vue';
import JobData from './content/JobData.vue';
import SkillData from './content/SkillData.vue';
</script>

<style lang="scss" scoped>
.resume-body {
  padding: 1.2em 2em 2em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}
</style>
