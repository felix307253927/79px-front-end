<template>
  <div class="main-container blog">
    <div class="container">
      博客
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data () {
      return {
      }
    },
    created(){
      this.$store.commit('setNavStyle','nav-normal')
    }
  }
</script>
