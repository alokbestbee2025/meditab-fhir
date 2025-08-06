<template>
  <div class="shadow-box-util">
    <slot></slot>
  </div>
</template>

<style scoped>
.shadow-box-util {
  background-color: white;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1); /* gray spreaded shadow */
  border-radius: 15px;
  padding: 24px;
  width: 100%;
  height: 100%;
}
</style>
