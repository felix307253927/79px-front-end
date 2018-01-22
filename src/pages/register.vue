<template>
  <div class="login-register register">
    <div class="useful-link">
      <router-link to="/">
        返回主页
      </router-link>
      <router-link to="/login">
        登录
      </router-link>
    </div>
    <div class="login-register-box">
      <div class="title">注册</div>
      <div class="input-field" v-focusActive>
        <input type="text" id="username" autocomplete="off">
        <label for="username">昵称</label>
      </div>
      <div class="input-field" v-focusActive>
        <input type="email" id="email" autocomplete="off">
        <label for="email">邮箱</label>
      </div>
      <div class="input-field" v-focusActive>
        <input type="password" id="password" autocomplete="off">
        <label for="password">密码</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {}
    },
    created() {

    },
    directives:{
      focusActive:{
        inserted(el){
          el.querySelector('input').onfocus = ()=>{
            el.querySelector('label').className = 'active'
          }
          el.querySelector('input').onblur = ()=>{
            checkActive();
          }
          checkActive();
          function checkActive() {
            if(!el.querySelector('input').value){
              el.querySelector('label').className = ''
            }
          }
        }
      }
    }
  }
</script>
