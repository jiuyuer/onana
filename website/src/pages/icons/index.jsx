import Icon, { AndroidOutlined, TaobaoCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import SvgIcon from '../../components/SvgIcon';

const Icons = () => {
  return (
    <section>
      <Space size={30}>
        <SvgIcon size={30} name="alibb" color="red"></SvgIcon>
        <Icon style={{ fontSize: '30px' }} component={TaobaoCircleOutlined} />
        <AndroidOutlined style={{ fontSize: '30px' }} />
      </Space>
    </section>
  );
};

export default Icons;
