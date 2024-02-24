<template>
  <header class="resume-header">
    <div class="resume-header-top">
      <h1>{{ personData.name }}</h1>
      <span class="resume-job">{{ personData.job }}</span>
    </div>

    <div class="resume-header-btm">
      <ul class="resume-header-btm-left">
        <li>
          <span>{{ personData.school }}</span>
          <span>{{ personData.major }}</span>
          <span>{{ personData.education }}</span>
        </li>
        <li>
          <span>{{ personData.gender }}</span>
          <span>{{ personData.birth }}</span>
        </li>
      </ul>

      <ul class="resume-header-btm-right">
        <li>
          <span>
            <a href="mailto:">{{ personData.email }}</a>
          </span>
        </li>
        <li>
          <span>
            <a :href="`tel:${personData.telephone}`">{{
              personData.telephone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
            }}</a>
          </span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useResume } from '../useResume';

const { personData } = useResume();
</script>

<style lang="scss" scoped>
.resume-header {
  padding: 4em 3em 2em;
  color: #fff;
  font-family: deyihei;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(to bottom, #0f6e8b, rgba(#0083ab, 0.9), rgba(#0083ab, 0.9), rgba(#0083ab, 0.5));

  &-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(#fff, 0.2);

    h1 {
      margin: 0;
      font-size: 46px;
      letter-spacing: 4px;
      font-weight: normal;
    }
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
            width: 2px;
            height: 50%;
            background: rgba(#fff, 0.2);
            top: 25%;
            right: -0.8em;
          }
        }
      }
    }

    &-right {
      text-align: right;
      letter-spacing: 2.2px;
    }
  }
}

.resume-job {
  font-size: 24px;
}
</style>
