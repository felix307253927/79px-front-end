<template>
  <div class="front">
    <section class="section-top">
      <div class="container text-center">
        <h1>分享知识 探寻乐趣</h1>
        <p>{79px},让成长加速！</p>
      </div>
    </section>
    <section class="section-front front-79px">
      <div class="container">
        <br>
        <h2 class="center-align">{79px}特色</h2>
        <div class="clearfix hidden-sm">
          <br>
        </div>
        <div class="row">
          <div class="col m6 l4 offset-l1">
            <div class="row">
              <div class="col s2">
                <div class="box-icon">
                  <i class="fa fa-laptop animated zoomIn"></i>
                </div>
              </div>
              <div class="col s10">
                <h4>响应式设计</h4>
                <p>全站采用响应式设计，你可以在手机、pad、电脑这些不同的平台下流畅的使用{79px}。</p>
              </div>
            </div>
          </div>
          <div class="col m6 l4 offset-l2">
            <div class="row">
              <div class="col s2">
                <div class="box-icon">
                  <i class="fa fa-map-o animated zoomIn"></i>
                </div>
              </div>
              <div class="col s10">
                <h4>单页面应用</h4>
                <p>网站采用restful架构。前端用Angular构建成单页面应用。让网站浏览起来就像本地应用一样流畅。</p>
              </div>
            </div>
          </div>
          <div class="col m6 l4 offset-l1">
            <div class="row">
              <div class="col s2">
                <div class="box-icon">
                  <i class="fa fa-smile-o animated zoomIn"></i>
                </div>
              </div>
              <div class="col s10">
                <h4>清爽的界面</h4>
                <p>采用小清新式的设计风格。不夹杂任何影响体验的广告。注重阅览体验。</p>
              </div>
            </div>
          </div>
          <div class="col m6 l4 offset-l2">
            <div class="row">
              <div class="col s2">
                <div class="box-icon">
                  <i class="fa fa-file-code-o animated zoomIn"></i>
                </div>
              </div>
              <div class="col s10">
                <h4>丰富的内容</h4>
                <p>会不定期的更新一些内容，设计到生活学习各个方面。总有一些能够满足你的求知欲。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-front front-recent">
      <div class="container center-align book-list">
        <h2>最近更新</h2>
        <div class="row">
          <div class="col s12 m6 l4 xl3 book-cover" v-for="item in [1,2,3,4]">
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
    </section>
    <section class="section-front intro">
      <div class="container center-align">
        <h2>探索新知识</h2>
        <p class="intro-text">不定期更新新的知识文档咱们共同进步-.-</p>
        <div class="row">
          <div class="col s12 m6 l3">
            <i class="fa fa-desktop animated zoomIn"></i>
            <h4>前端</h4>
            <p>运行在浏览器上的，用户能直接看到的界面和部分数据交互逻辑。和用户的交互密切相关。学习前端知识能够不断的满足学习的成就感。</p>
          </div>
          <div class="col s12 m6 l3">
            <i class="fa fa-cogs animated zoomIn"></i>
            <h4>工具</h4>
            <p>做什么都需要一系列的工具。一个好的工具比如版本控制，自动化执行任务等等，能够优化我们的工作流程，提高我们的工作效率。</p>
          </div>
          <div class="col s12 m6 l3">
            <i class="fa fa-server animated zoomIn"></i>
            <h4>服务</h4>
            <p>搭建在服务器上，能够为用户提供一系列功能的服务。一个优秀的稳定的服务能够方便更多有相关需求的用户。</p>
          </div>
          <div class="col s12 m6 l3">
            <i class="fa fa-database animated zoomIn"></i>
            <h4>后端</h4>
            <p>提供一系列服务的支持的技术。运行在服务器上的没有存在感但有很重要的部分。后端知识的学习能够更大程度定制化我们的产品需求。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-front front-do-it">
      <div class="container center-align">
        <h2>不止于想</h2>
        <p>从一个想法到想法变成现实，总有许多的不可能。新鲜有趣的技术总能克服些许不可能！</p>
        <p>从现在起做点什么，为曾经的想法迈出第一步。</p>
        <a href="/explorer" class="btn btn-warning btn-lg">立即开始</a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'front',
    data () {
      return {
        recentBookList:[],
      }
    },
    created(){
      /*this.$http.get('/api/book/list/recent').then(res => {
        this.recentBookList = res.data
        console.log(res)
      }, err => {
        // error callback
      })*/
    }
  }
</script>
