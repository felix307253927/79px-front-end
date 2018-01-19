<template>
  <div id="app" v-loading>
    <router-view name="Header"></router-view>
    <router-view name="Content"></router-view>
    <router-view></router-view>
    <router-view name="Footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  directives:{
    loading:{
      inserted(el){
        document.querySelector('.loading').style.display = 'none'
      }
    }
  }
}
</script>

