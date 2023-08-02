import { Outlet } from 'react-router-dom';
const AppMain = () => {
  return (
    <main className="content">
      <Outlet />
    </main>
  );
};

export default AppMain;
