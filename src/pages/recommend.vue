<template>
  <div class="recommend">
    <div class="container">
      <br>
      <div class="row">
        <div class="col s12 m6 l4 xl3 book-cover" v-for="item in [1,2,3,4,5,6,7]">
          <div class="book">
            <a class="book-cover" :class="'book-cover'+item" href="" title="查看详情">
              <div class="title-subtitle">
                <div class="title">网站建设指南</div>
                <div class="subtitle">2016-07-20</div>
              </div>
            </a>
            <div class="author-read">
              <div class="left">By源泉</div>
              <a class="clear-a right" href="" title="立即阅读">
                <i class="fa fa-eye"></i>
              </a>
            </div>
            <div class="top-right book-top"></div>
            <div class="top-right book-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    data () {
      return {
      }
    },
    created(){
      this.$store.commit('setNavStyle','nav-normal')
    }
  }
</script>
