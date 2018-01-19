<template>
  <nav :class="navStyle">
    <div class="nav-wrapper">
      <div class="container">
        <router-link to="/" class="brand-logo">{79px}</router-link>
        <ul class="nav-left hide-on-med-and-down">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/recommend">精选</router-link></li>
          <li><router-link to="/explorer">探索</router-link></li>
          <li><router-link to="/blog">博客</router-link></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="">登录</a></li>
          <li><a href="">注册</a></li>
          <li><a href="">注销</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        recentBookList:[],
      }
    },
    created(){

    },
    computed:{
      navStyle(){
        return this.$store.state.navStyle
      }
    }
  }
</script>
