import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Switch, Input } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import { authContext } from '../../contexts';

const { Header: AntHeader } = Layout;

export const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const { setToken, logout } = useContext<any>(authContext);

  const toggleTheme = (isChecked: any) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  if (status === 'loading') {
    return null;
  }

  return (
    <AntHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Switch checked={isDarkMode} onChange={toggleTheme} />
        </Menu.Item>
        <Menu.Item key="3" onClick={() => logout()}>
          Logout
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};
