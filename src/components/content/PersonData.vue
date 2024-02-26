<template>
  <BlockContent name="个人信息">
    <ul class="person-detail">
      <li>
        <span>性别：</span>
        <span>{{ personData.gender }}</span>
      </li>
      <li>
        <span>生日：</span>
        <span>{{ personData.birth }}</span>
      </li>
      <li>
        <span> 手机：</span>
        <span>
          <a :href="`tel:${personData.telephone}`">{{ personData.telephone }}</a>
        </span>
      </li>
      <li>
        <span> 邮箱：</span>
        <span>
          <a :href="`mailto:${personData.email}`">{{ personData.email }}</a>
        </span>
      </li>
    </ul>
  </BlockContent>
</template>

<script setup>
import { useResume } from '../../useResume';
import BlockContent from '../BlockContent.vue';

const { personData } = useResume();
</script>

<style lang="scss" scoped>
.person-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 18px;

  li {
    span {
      &:first-child {
        font-family: deyihei;
        font-weight: bold;
        letter-spacing: 1.2px;
      }
    }
  }
}
</style>
