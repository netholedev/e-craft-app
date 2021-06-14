import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

export const Header: FC = () => {
  return (
    <AntHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/auth">Auth</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};
