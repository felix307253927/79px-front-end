import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
  ]
})
