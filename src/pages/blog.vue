<template>
  <div class="main-container blog">
    <div class="section-top center-align">
      <h1 class="title">希望，2018宛若新生</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="blog-info">
            <div class="info">源泉</div>
            <div class="info">2018-01-22</div>
            <div class="info">tag:</div>
          </div>
          <div class="blog-content">
            在2017年，一共写了15篇博客。经历了一次失业，一次合伙注册公司。焦虑、冲动和冷静。是2017的主旋律。
          </div>
        </div>
      </div>
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
