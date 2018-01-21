<template>
  <div class="main-container book-detail">
    <div class="book-title center-align">
      <h1>正则表达式</h1>
      <a class="btn-floating btn-large halfway-fab waves-effect waves-light">
        <i class="material-icons">R</i>
      </a>
    </div>
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <ul class="book-item-list">
            <li v-for="item in [1,2,3,4,5]">
              <router-link :to="'/bookPage/'+item+'/'+item">1. 正则表达式简介</router-link>
            </li>
          </ul>
        </div>
        <div class="col s12 m6">
          <div class="book-info-list row">
            <div class="col s6">
              <p class="text-intro">作者</p>
              <p class="text-info">源泉</p>
            </div>
            <div class="col s6">
              <p class="text-intro">创建时间</p>
              <p class="text-info">2016-07-26</p>
            </div>
            <div class="col s6">
              <p class="text-intro">章节</p>
              <p class="text-info">6</p>
            </div>
            <div class="col s6">
              <p class="text-intro">浏览量</p>
              <p class="text-info">1108</p>
            </div>
          </div>
          <div class="book-intro">
            <h4 class="title">简介</h4>
            <div class="content">
              <p>正则表达式是烦琐的，但它是强大的，学会之后的应用会让你除了提高效率外，会给你带来绝对的成就感。<br></p>
              <p>应用场景</p>
              <p>通常我们可以使用正则表达式来匹配一定规则的字符串。如果有爬虫或者数据处理方面的需求就特别适合使用正则表达式。这样我们可以快速精准的按照我们想要的方式来处理数据。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bookDetail',
    data() {
      return {}
    },
    created() {
      this.$store.commit('setNavStyle', 'nav-normal')
    }
  }
</script>
