import { createMenus } from '@/router/index';
import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import sidebar from './sidebar.module.scss';
const Sidebar = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(
    location.pathname.replace('/', '') || 'about'
  );
  const navigate = useNavigate();
  const onClick = e => {
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <div className={sidebar.sidebar}>
      <div className={sidebar.title}>菜单入口</div>
      <Menu
        theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
        items={createMenus}
      />
    </div>
  );
};

export default Sidebar;
