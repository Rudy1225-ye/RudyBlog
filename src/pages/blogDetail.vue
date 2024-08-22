<template>
  <div class="detailContainer">
    <imgLazyLoad></imgLazyLoad>
  </div>
</template>

<script setup>
import imgLazyLoad from '@/pages/article/ImgLazyLoad.md'
</script>

<style>
.detailContainer {
  width: 100%;
  padding-bottom: 64px;
  margin: 0 auto;
}
.detailContainer h1 {
  text-align: center;
}
.markdown-body {
  width: 50%;
  font-size: 16px;
  margin: 0 auto;
  padding-bottom: 64px;
}

</style>