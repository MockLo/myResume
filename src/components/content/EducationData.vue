<template>
  <dic class="resume-education">
    <BlockHeader name="教育经历" />

    <div class="resume-education-detail">
      <span>{{ educationData.timeStart }} - {{ educationData.timeEnd }}</span>
      <div class="resume-education-detail-right">
        <span :data-tag="educationData.tag"> {{ educationData.school }}</span>
        <span>{{ educationData.major }}</span>
        <span>{{ educationData.education }}</span>
      </div>
    </div>
  </dic>
</template>

<script setup>
import { useResume } from '../../useResume';
import BlockHeader from '../BlockHeader.vue';

const { educationData } = useResume();
</script>

<style lang="scss" scoped>
.resume-education {
  &-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: deyihei;
    letter-spacing: 1px;
    font-size: 20px;
    color: #222;
    padding: 0 6px;

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
          background-color: rgba(#000, 0.8);
          border-radius: 4px;
          margin-left: 0.4em;
          color: #fff;
          padding: 3px 0.5em;
          font-size: 0.7em;
          font-weight: bold;
          vertical-align: super;
        }
      }
    }
  }
}
</style>
