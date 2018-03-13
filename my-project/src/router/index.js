import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Invest from '../components/invest/Invest'
import Life from '../components/life/Life'
import Mine from '../components/mine/Mine'

Vue.use(Router)

let router = new Router({
  routes: [
    {path: '/home', name: 'home', component: Home},
    {path: '/invest', name: 'invest', component: Invest},
    {path: '/life', name: 'life', component: Life},
    {path: '/mine', name: 'mine', component: Mine}
  ],
  linkActiveClass: 'active'
})
router.push('/home')

export default router
