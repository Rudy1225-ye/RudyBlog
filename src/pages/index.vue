<template>
  <div class="pageContainer">
    <img src="../assets/index-bg.jpg" alt="" class="bg">
    <div class="Content">
      <div class="content-title">
        <p class="title-text">
          Hi, I'm Rudy.
        </p>
      </div>
      <div class="content-text">
        我是2024届毕业生，目前正在深圳寻找前端开发岗位，专注于Vue.js的开发，并对Node.js有一定的实践经验。我热爱编程，乐于接受挑战，希望通过不断的学习与实践，成长为一名卓越的前端工程师。
      </div>
      <div class="content-text">
        我在大学里系统性的学习了交互设计、UI设计和前端开发等技能，并在多个项目中担任不同角色，积累了丰富的实践经验。我熟悉HTML、CSS、JavaScript、Vue.js、Node.js等前端技术，对前端性能优化和前端工程化有一定的理解。
      </div>
    </div>
    <div class="Content">
      <div class="content-title">
        <p class="title-text">
          Latest Writing
        </p>
      </div>
    </div>
    <articleList></articleList>
    
  </div>

</template>

<script setup>
import articleList from '@/components/articleList.vue'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: var(--color-text);
}

.pageContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: var(--color-bg);
  padding-bottom: 64px;
}
.bg {
  width: 100%;
  aspect-ratio: 6 / 1;
  object-fit: cover;
}
.Content {
  width: 50%;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.content-title {
  font-size: 32px;
  display: flex;
}
.content-text {
  font-size: 20px;
}
@media screen and (max-width: 1440px) {
  .Content {
    width: 960px
  }
  
}
</style>