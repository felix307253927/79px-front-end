<template>
  <div class="main-container book-page">
    <div class="section-summary-bg"></div>
    <div class="container book-page-container">
      <div class="summary">
        <ul class="summary-nav">
          <li v-for="item in [1,2,3,4,5]">
            <router-link :to="'/bookPage/'+item+'/'+item">1. 正则表达式简介</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="content-container">
          <section class="normal">
            <h1>简介</h1>
            <p>除非你以前使用过正则表达式，否则你可能不熟悉此术语。但是，毫无疑问，你已经使用过不涉及脚本的某些正则表达式。</p>

            <p>例如，你很可能使用 ? 和 * 通配符来查找硬盘上的文件。? 通配符匹配文件名中的单个字符，而 * 通配符匹配零个或多个字符。像 data?.dat 这样的模式将查找文件。尽管这种搜索方法很有用，但它的应用场景还是有限的。</p>

            <p>典型的搜索和替换操作要求您提供与预期的搜索结果匹配的确切文本。虽然这种技术对于对静态文本执行简单搜索和替换任务可能已经足够了，但它缺乏灵活性，若采用这种方法搜索动态文本，即使不是不可能，至少也会变得很困难。</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data() {
      return {}
    },
    created() {
      this.$store.commit('setNavStyle','nav-normal')
    }
  }
</script>
