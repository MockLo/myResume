<template>
  <header class="resume-header">
    <h1>{{ personData.name }}</h1>
    <span class="resume-job">{{ personData.job }}</span>
  </header>
</template>

<script setup>
import { useResume } from '../useResume';

const { personData } = useResume();
</script>

<style lang="scss" scoped>
.resume-header {
  margin: 0 2em;
  padding: 4em 16px 6px;
  font-family: deyihei;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 3px solid #333;

  h1 {
    margin: 0;
    font-size: 40px;
    letter-spacing: 4px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
    font-weight: normal;
  }

  &-btm {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    font-size: 18px;
    letter-spacing: 2px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: 1.5;
    }

    &-left {
      li {
        display: flex;
        align-items: center;
        gap: 1.6em;

        span:not(:last-child) {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            width: 1px;
            height: 50%;
            background: #000;
            top: 25%;
            right: -0.8em;
          }
        }
      }
    }
  }
}

.resume-job {
  font-size: 24px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
}
</style>
