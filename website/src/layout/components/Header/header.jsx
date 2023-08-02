import SvgIcon from '@/components/SvgIcon';
const Header = () => {
  return (
    <header className="header">
      <div className="favicon">
        <SvgIcon name="favicon"></SvgIcon>
      </div>
      <h2 className="animate__animated animate__fadeInUp">施晓峰的个人简历</h2>
    </header>
  );
};

export default Header;
