<template>
  <div class="job-block">
    <div class="job-block-header">
      <span>{{ timeStr }}</span>

      <div class="job-block-header-right">
        <span>{{ companyData.name }}</span>
        <span>{{ companyData.department }}</span>
        <span>{{ companyData.position }}</span>
      </div>
    </div>

    <div class="job-block-details">
      <div class="job-detail" v-for="(item, i) in details" :key="i">
        <div class="job-detail-name">「{{ item.job }}」</div>
        <ul class="job-detail-list">
          <li v-for="(str, j) in item.list" :key="j">{{ str }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const companyData = computed(() => props.data.companyData || {});
const timeStr = computed(() => `${companyData.value.timeStart} - ${companyData.value.timeEnd}`);
const details = computed(() => props.data.details || []);
</script>

<style lang="scss" scoped>
.job-block {
  &-header {
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

      span:not(:last-child) {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 50%;
          background: rgba(0, 0, 0, 0.2);
          top: 25%;
          right: -0.5em;
        }
      }
    }
  }

  &-details {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding-left: 20px;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 1px;
      background: rgba(0, 0, 0, 0.15);
      top: 20px;
      left: 5px;
      bottom: 10px;
    }
  }
}

.job-detail {
  margin-top: 1em;

  &-name {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 700;
  }
}
</style>
