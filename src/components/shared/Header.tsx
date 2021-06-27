import React, { FC } from 'react';
import { Layout } from 'antd';

import Logo from '../../assets/logo.svg';
import { TopMenu } from './TopMenu';


const { Header: AntHeader } = Layout;

export const Header: FC = () => {
  return (
    <AntHeader className="private-layout--header">
      <img className="private-layout--logo" src={Logo} alt=""/>
      <TopMenu />
    </AntHeader>
  );
};
