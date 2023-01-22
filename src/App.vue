<script setup>
const theme = localStorage.getItem('theme') || 'dark'

if (theme)
  document.body.setAttribute('arco-theme', theme)
</script>

<template>
  <router-view />
</template>
