import { FloatButton } from 'antd';
import AppMain from './components/AppMain/appMain';
import Header from './components/Header/header';
const Layout = () => {
  return (
    <div className="layout">
      <div className="background">
        <div className="image"></div>
      </div>
      <Header />
      <AppMain />
      <FloatButton.BackTop />
    </div>
  );
};

export default Layout;
