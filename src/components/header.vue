<template>
  <nav :class="navStyle">
    <div class="nav-wrapper">
      <div class="container">
        <router-link to="/" class="brand-logo">{79px}</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">登录</a></li>
          <li><a href="badges.html">注册</a></li>
          <li><a href="collapsible.html">注销</a></li>
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
