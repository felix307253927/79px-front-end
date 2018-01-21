import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/79px-front-end/dist/',
  routes: [
    {
      path: '/',
      name: 'front',
      components: {
        Content:(resolve)=>require(['@/pages/front'], resolve),
        Header: Header,
        Footer: Footer,
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      components: {
        Content:(resolve)=>require(['@/pages/recommend'], resolve),
        Header: Header,
        Footer: Footer,
      }
    },
    {
      path: '/bookDetail/:id',
      name: 'bookDetail',
      components: {
        Content:(resolve)=>require(['@/pages/bookDetail'], resolve),
        Header: Header,
        Footer: Footer,
      }
    },
    {
      path: '/bookPage/:detailId/:pageId',
      name: 'bookPage',
      components: {
        Content:(resolve)=>require(['@/pages/bookPage'], resolve),
      }
    },
    {
      path: '/explorer',
      name: 'explorer',
      components: {
        Content:(resolve)=>require(['@/pages/explorer'], resolve),
        Header: Header,
        Footer: Footer,
      }
    },
    {
      path: '/blog',
      name: 'blog',
      components: {
        Content:(resolve)=>require(['@/pages/blog'], resolve),
        Header: Header,
        Footer: Footer,
      }
    },
  ]
})
