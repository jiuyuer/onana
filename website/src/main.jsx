import router from '@/router/index';
import '@/styles/index.scss';
import 'animate.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'uno.css';
import 'virtual:svg-icons-register';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
