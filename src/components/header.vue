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
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li>
            <router-link to="/register">注册</router-link>
          </li>
          <li>
            <router-link to="/logout">注销</router-link>
          </li>
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
