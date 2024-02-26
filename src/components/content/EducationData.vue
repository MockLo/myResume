<template>
  <BlockContent name="教育经历">
    <div class="resume-education-detail">
      <span>{{ educationData.timeStart }} - {{ educationData.timeEnd }}</span>
      <div class="resume-education-detail-right">
        <span :data-tag="educationData.tag"> {{ educationData.school }}</span>
        <span>{{ educationData.major }}</span>
        <span>{{ educationData.education }}</span>
      </div>
    </div>
  </BlockContent>
</template>

<script setup>
import { useResume } from '../../useResume';
import BlockContent from '../BlockContent.vue';

const { educationData } = useResume();
</script>

<style lang="scss" scoped>
.resume-education-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: deyihei;
  letter-spacing: 1px;
  font-size: 20px;
  color: #222;

  &-right {
    display: flex;
    align-items: center;
    gap: 1em;

    span:not(:first-child) {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 50%;
        background: rgba(0, 0, 0, 0.2);
        top: 25%;
        left: -0.5em;
      }
    }

    span[data-tag] {
      &::after {
        content: attr(data-tag);
        margin-left: 4px;
        font-size: 12px;
        vertical-align: super;
        line-height: 1;
      }
    }
  }
}
</style>
