<template>
  <div id="app">
    <router-view name="Header"></router-view>
    <router-view name="Content"></router-view>
    <router-view></router-view>
    <router-view name="Footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
