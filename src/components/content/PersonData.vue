<template>
  <div class="person-data">
    <BlockHeader name="个人信息" />

    <div class="person-detail">
      <ul>
        <li>
          <span>性别：</span>
          <span>{{ personData.gender }}</span>
        </li>
        <li>
          <span>生日：</span>
          <span>{{ personData.birth }}</span>
        </li>
        <li>
          <span> 邮箱：</span>
          <span>
            <a href="mailto:">{{ personData.email }}</a>
          </span>
        </li>
        <li>
          <span> 手机：</span>
          <span>
            <a :href="`tel:${personData.telephone}`">{{
              personData.telephone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
            }}</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useResume } from '../../useResume';
import BlockHeader from '../BlockHeader.vue';

const { personData } = useResume();
</script>

<style lang="scss" scoped>
.person-detail {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
  }

  li {
    span {
      &:first-child {
        font-family: deyihei;
        font-weight: bold;
        letter-spacing: 1.2px;
        padding-right: 2px;
      }
    }
  }
}
</style>
