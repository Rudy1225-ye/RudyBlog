<template>
  <div class="nav-container">
    <div class="nav">
      <div class="nav-logo">
        <router-link to="/">
          <img src="../assets/Logo-black.svg" alt="logo">
          
        </router-link>
      </div>
      <div class="nav-links pc_display">
        <RouterLink v-for="item in List.slice(0, 2)" :key="item.name" :to="item.link" :class="['routerLink', { active: $route.path === item.link }]">
          {{ item.name }}
        </RouterLink>
        <a href="https://rudywebsite.top" target="_blank" class="routerLink">
          Portfolio
        </a>
      </div>
      
      <label for="menu" class="hamburger-menu m_display">
        <input @click="check" :checked="isCheck" type="checkbox" name="" id="menu">
      </label>
      <aside class="sidebar m_display">
          <ul class="Link-list">
            <li v-for="item in List" :key="item.name">
              <div>
                <routerLink class="bar-item" :to="item.link">
                  {{ item.name }}
                </routerLink>
              </div>
            </li>
          </ul>
      </aside>
      <CustomButton @click.prevent="handleContact" :buttonLink="'/'" :buttonName="'Contact' " class="loginButton pc_display"></CustomButton>
    </div>
  </div> 
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import CustomButton from '@/components/CustomButton.vue'
const List = ref([
  { name: 'Home', link: '/' },
  { name: 'Blog', link: '/blog' },
])
const isCheck = ref(false)
const emit = defineEmits(['check'])
const check = () => {
  isCheck.value = !isCheck.value
  emit('check', isCheck.value)
}
const route = useRoute()
watch(route, (newRoute) => {
  isCheck.value = false
}, { deep: true });

const handleContact = () => {
  window.location.href = 'mailto:2716728267@qq.com';
}
</script>

<style scoped>
  *, *::after, *::before {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  .nav {
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    position: relative;
  }
  
  .nav-logo img {
    height: 48px;
  }
  
  .nav-links {
    display: flex;
    gap: 32px;
    color: var(--color-bg);
    margin-left: auto;
  }
  .nav-container {
    width: 100%;
    margin: 0 auto;
    padding: 32px 0;
  }
  .loginButton {
    margin-left: auto;
  }
  .routerLink {
    text-decoration: none;
    color: var(--color-bg);
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .routerLink:after,
  .routerLink:before {
    background: var(--color-bg);
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transform-origin: 0 0;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 100%;
  }

  .routerLink:before {
    opacity: 0.5;
    transform: translateZ(0) scaleX(0);
    transform-origin: 100% 100%;
    transition: transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.15s;
  }

  .routerLink:hover:after {
    transform: translateZ(0) scaleX(0);
    transform-origin: 100% 100%;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .active:after,
  .active:before {
    background: #fff;
  }
  .m_display {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .pc_display {
      display: none;
    }
    
    .m_display {
      display: block;
    }
    
    .hamburger-menu {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 4px;
      transition: all 0.2s ease-in-out;
      position: absolute;
      right: 0;
      z-index: 2;
    }
    .hamburger-menu input {
      appearance: none;
      pointer-events: none;
      outline: none;
      margin: 0;
      padding: 0;
      transition: all 0.2s ease-in-out;
      transform-origin: center;
    }
    .hamburger-menu input,
    .hamburger-menu::after,
    .hamburger-menu::before {
      content: '';
      width: 32px;
      height: 4px;
      border-radius: 8px;
      background-color: var(--color-bg);
      transition: all 0.2s ease-in-out;
    }
    .hamburger-menu input:checked {
      rotate: 90deg;
      background-color: #ffffff;
    }
    .hamburger-menu:has(input:checked)::after,
    .hamburger-menu:has(input:checked)::before {
      width: 0;
    }
    .sidebar {
      width: 100vw;
      height: 100vh;
      transform: translate(105%);
      background-color: #000000;
      background-blend-mode: transparent;
      opacity: .8;
      position: absolute;
      right: 0;
      transition: all 0.2s ease-in-out;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      top: -8px;
      z-index: 1;
    }
    .hamburger-menu:has(input:checked) + .sidebar {
      transform: translate(5%);
    }
    
    .Link-list {
      display: flex;
      position: absolute;
      top: 25%;
      left: 45%;
      transform: translate(-50%, -120%);
      flex-direction: column;
      gap: 40px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      z-index: 3;
      filter: blur(0);
    }
    .bar-item {
      text-decoration: none;
      color: #ffffff;
    }
  }
</style>