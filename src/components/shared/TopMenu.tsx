import React, { FC, useContext } from 'react';
import { authContext } from '../../contexts';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Button, Switch, Tooltip,  } from 'antd';
import { Language } from './Language';
import {
  BulbOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';

export const TopMenu: FC = () => {
const { logout } = useContext<any>(authContext);
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked: any) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  if (status === 'loading') {
    return null;
  }

  return (
    <div className="flex items-center">
      <Switch   
        checkedChildren={<BulbOutlined  />}
        unCheckedChildren={<BulbOutlined  />} 
        checked={isDarkMode} 
        onChange={toggleTheme} 
        className="u-m-r-3"
      />
      <Language />
      <Tooltip title="Profile">
        <Button className="u-m-l-3" icon={<UserOutlined />}/>
      </Tooltip>
      <Tooltip title="Logout">
        <Button className="u-m-l-3" icon={<LogoutOutlined />} onClick={logout} />
      </Tooltip>
    </div>
  );
};
