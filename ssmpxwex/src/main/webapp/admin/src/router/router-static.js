import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import discussyonghufenxiang from '@/views/modules/discussyonghufenxiang/list'
    import maijia from '@/views/modules/maijia/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import nongchangzixun from '@/views/modules/nongchangzixun/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import discussshangpinxinxi from '@/views/modules/discussshangpinxinxi/list'
    import orders from '@/views/modules/orders/list'
    import fenxiangleixing from '@/views/modules/fenxiangleixing/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'
    import yonghufenxiang from '@/views/modules/yonghufenxiang/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/news',
        name: '新闻资讯',
        component: news
      }
          ,{
	path: '/discussyonghufenxiang',
        name: '用户分享评论',
        component: discussyonghufenxiang
      }
          ,{
	path: '/maijia',
        name: '卖家',
        component: maijia
      }
          ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/nongchangzixun',
        name: '农场资讯',
        component: nongchangzixun
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
          ,{
	path: '/discussshangpinxinxi',
        name: '商品信息评论',
        component: discussshangpinxinxi
      }
          ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
          ,{
	path: '/fenxiangleixing',
        name: '分享类型',
        component: fenxiangleixing
      }
          ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/yonghufenxiang',
        name: '用户分享',
        component: yonghufenxiang
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
