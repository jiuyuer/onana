import header from './header.module.scss';
const Header = () => {
  return (
    <div className={header.header}>
      <h1 className="animate__animated animate__heartBeat">React入门教程</h1>
    </div>
  );
};

export default Header;
