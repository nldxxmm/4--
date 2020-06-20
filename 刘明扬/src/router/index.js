import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Route from '@/view/Route'
import Match from '@/view/Match'
import LeagueBuilding from '@/view/LeagueBuilding'
import Internet from '@/view/Internet'
import About from '@/view/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/route',
      name: 'Route',
      component: Route
    },
    {
      path: '/match',
      name: 'Match',
      component: Match
    },
    {
      path: '/leagueBuilding',
      name: 'LeagueBuilding',
      component: LeagueBuilding
    },
    {
      path: '/internet',
      name: 'Internet',
      component: Internet
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
