import AppMain from './components/AppMain/appMain';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';

const Layout = () => {
  return (
    <main className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <AppMain />
      </div>
    </main>
  );
};

export default Layout;
