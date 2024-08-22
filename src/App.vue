<script setup>

import { RouterView } from 'vue-router'
import TopNav from '@/components/TopNav.vue';
const handlecheck = (emitEvent) => {
  if(emitEvent) {
    document.querySelector('.views').classList.add('blur')
  }
  else {
    document.querySelector('.views').classList.remove('blur')
  }
}
</script>

<template>
  <div class="Page">
    <TopNav @check="handlecheck"></TopNav>
    <transition name="slide-fade">
      <RouterView class="views" />
    </transition>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import 'prismjs/themes/prism-tomorrow.css';

html,
body,
#app {
  margin: 0;
  padding: 0;
  font-size: 0;
  height: 100%;
  box-sizing: border-box;
}
:root {
  --color-nav:#6d6d6d;
  --color-bg:#121212;
  --color-primary:#4c00fc;
  --text-grey:#909090;
  --text-grey-light:#EEEEEE;
  --color-bg-light: #ffffff;
  --text-primary:#3B3F34;
}
.markdown-body {
  font-size: 16px;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 64px;
}
.markdown-body h1 {
  text-align: center;
}
.markdown-body img {
  width: 100%;
}
.blur {
  filter: blur(5px);
}
.views {
  transition: all 0.2s ease-in-out;
}
.Page {
  width: 95%;
  padding: 0 2.5%;
  height: 100vh;
  max-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-x: hidden;
  background-color: var(--color-bg-light);
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media screen and (max-width: 1440px) {
  .Page {
    gap: 48px;
  }
  
}
@media screen and (max-width: 1024px) {
  .Page {
    width: 90%;
    gap: 32px;
  }
}
@media screen and (max-width: 768px) {
  .Page {
    gap: 32px;
  }
}
</style>
