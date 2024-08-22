<template>
  <router-link :to="buttonLink" class="button-link">
    <button type="button" class="Button">
      <span :data-text="buttonName"> {{ buttonName }} </span>
    </button>
  </router-link>
</template>

<script setup>
defineProps
({
  buttonName: String,
  buttonLink: String
})
</script>

<style scoped>
.button-link {
  color: #191817;
}
button {
  font-family: Popins;
  font-size: 16px;
  line-height: 1.5;
  color: inherit;
  margin: 0;
  padding: 0;
  text-transform: none;
  cursor: pointer;
}

[type="button"],
button {
  background-color: transparent;
  background-image: none;
}

.Button {
  border: 2px solid #191817;
  border-radius: 4px;
  padding: 2px 20px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  text-align: center;
  overflow: hidden;
  position: relative;
  height: 32px;
  cursor: pointer;
}

.Button:before {
  content: "";
  position: absolute;
  top: 100%;
  left: -40%;
  width: 300%;
  height: 400%;
  background-color: #191817;
  transition: all 0.3s ease-in-out;
  transform: rotate(-45deg);
}

.Button:hover:before {
  top: 0;
  left: -160%;
  width: 380%;
  height: 800%;
}

span {
  transition: all 0.3s ease-in-out;
  display: block;
  height: 100%;
  position: relative;
  top: 0;
}

.Button:hover span {
  top: -100% !important;
}

span:after {
  content: attr(data-text);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
}

</style>