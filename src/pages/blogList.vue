<template>
  <div class="main-container blog-list">
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <ul class="blog-list-container">
            <li class="item" v-for="item in [1,2,3,4,5,6]">
              <h4>
                <router-link :to="'/blog/'+item">希望，2018宛若新生</router-link>
              </h4>
              <div class="blog-info">
                <div class="info">源泉</div>
                <div class="info">2018-01-22</div>
                <div class="info">tag:</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blogList',
    data () {
      return {
      }
    },
    created(){
      this.$store.commit('setNavStyle','nav-normal')
    }
  }
</script>
