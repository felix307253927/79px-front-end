<template>
  <div class="login-register login">
    <div class="useful-link">
      <router-link to="/">
        返回主页
      </router-link>
      <router-link to="/register">
        注册
      </router-link>
    </div>
    <div class="login-register-box">
      <div class="title">登录</div>
      <div class="input-field" v-focusActive>
        <input type="text" id="email" autocomplete="off">
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
    name: 'login',
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
