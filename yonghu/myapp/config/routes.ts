export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {//登录
        name: '登录', path: '/user/login', component: './user/Login',},
      {//注册
        name: '注册',
        path: '/user/register',
        component: './user/Register',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',

    routes: [
      // {path: '/admin/sub-page', name: '用户管理', icon: 'smile', component: './Welcome',},
      {path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage',},
      {
        component: './404',
      },
    ],
  },
  {
    name: '查询表格',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '分析页',
    icon: 'smile',
    path: '/dashboardanalysis',
    component: './DashboardAnalysis',
  },
  {
    component: './404',
  },
];
