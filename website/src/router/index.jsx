import Layout from '@/layout/index';
import About from '@/pages/about';
import Icons from '@/pages/icons';
import QuickStart from '@/pages/quickStart';
import State from '@/pages/state';
import { createBrowserRouter, Navigate } from 'react-router-dom';
const routes = [
  {
    path: '/',
    element: <Layout />,
    loader: () => {
      console.log('Layout loader');
      return true;
    },
    children: [
      {
        index: true,
        element: <Navigate to={'/about'} /> // 默认打开
      },
      {
        meta: {
          title: 'React 是什么'
        },
        path: 'about',
        element: <About />,
        index: true
      },
      {
        meta: {
          title: '快速入门'
        },
        path: 'quick-start',
        element: <QuickStart />
      },
      {
        meta: {
          title: '路由管理'
        },
        path: 'react-router',
        element: <div>React Router</div>
      },
      {
        meta: {
          title: '状态管理'
        },
        path: 'state',
        element: <State />
      },
      {
        meta: {
          title: '使用图标'
        },
        path: 'icons',
        element: <Icons />,
        loader: () => {
          console.log('icons loader');
          return true;
        }
      }
    ]
  }
];

export const createMenus = routes[0].children
  .filter(item => item.path)
  .map(route => {
    return {
      key: route.path,
      // icon: route.icon,
      label: route.meta.title
    };
  });

const router = createBrowserRouter(routes, {
  // basename: '/app'
});

export default router;
