<template>
  <RouterLink :to="props.toPage" class="Link">
    <slot>
    </slot>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  toPage: {
    type: String,
    required: false,
    default: ''
  }
})


</script>

<style scoped>
  .Link{
    color: var(--color-text);
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  .Link:after,
  .Link:before {
    background: #191817;
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

  .Link:before {
    opacity: 0.5;
    transform: translateZ(0) scaleX(0);
    transform-origin: 100% 100%;
    transition: transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.15s;
  }

  .Link:hover:after {
    transform: translateZ(0) scaleX(0);
    transform-origin: 100% 100%;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
</style>