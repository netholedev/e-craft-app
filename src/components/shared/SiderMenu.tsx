import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export const SiderMenu: FC = () => {
  return (
    <Menu
      className="private-layout--menu"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="1" icon={<HomeOutlined />} >
        <Link to="/">Companies</Link>
      </Menu.Item>
      
      <Menu.Item key="2" icon={<HomeOutlined />} >Menu 1</Menu.Item>
      <Menu.Item key="3" icon={<HomeOutlined />} >Menu 2</Menu.Item>
      <Menu.Item key="4" icon={<HomeOutlined />} >Menu 3</Menu.Item>
      <Menu.Item key="5" icon={<HomeOutlined />} >Menu 4</Menu.Item>
      <Menu.Item key="6" icon={<HomeOutlined />} >Menu 5</Menu.Item>

      <Menu.Item key="7" icon={<MailOutlined />} >Menu 1</Menu.Item>
      <Menu.Item key="8" icon={<MailOutlined />} >Menu 2</Menu.Item>
      <Menu.Item key="9" icon={<MailOutlined />} >Menu 3</Menu.Item>
      <Menu.Item key="10" icon={<MailOutlined />} >Menu 4</Menu.Item>
      <Menu.Item key="11" icon={<MailOutlined />} >Menu 5</Menu.Item>

    </Menu>
  );
};
