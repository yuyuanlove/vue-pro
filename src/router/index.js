import { createRouter, createWebHistory } from 'vue-router'
import keywordSearchPage from '../views/keywordSearchPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'keywordsearchres',
      title:'关键词搜索结果页面',
      component: keywordSearchPage
    },
    {
      path: '/keywordsearchres',
      name: 'keywordsearchres',
      title:'关键词搜索结果页面',
      component: keywordSearchPage
    },
  ]
})

export default router
