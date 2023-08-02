import { Outlet } from 'react-router-dom';
import appMain from './main.module.scss';
const AppMain = () => {
  return (
    <div className={appMain.main}>
      <Outlet />
    </div>
  );
};

export default AppMain;
