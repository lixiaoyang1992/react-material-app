import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';

interface IProps {}

const Nav = (props: IProps) => {
  return (
    <NavBar
      mode="dark"
      // icon={<Icon type="left" />}
      // onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />
      ]}
    >
      首页
    </NavBar>
  );
};

export default Nav;
