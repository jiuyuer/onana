import Layout from '@/layout/index';
import About from '@/pages/about';
import { createHashRouter, Navigate } from 'react-router-dom';
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
          title: '关于'
        },
        path: 'about',
        element: <About />,
        index: true
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

const router = createHashRouter(routes, {
  // basename: '/app'
});

export default router;
