import React, { FC } from 'react';
import { Layout } from 'antd';

import { Header, SiderMenu } from '../shared';
const { Content, Sider } = Layout;

export const PrivateLayout: FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Sider collapsible  width={280}  className="private-layout--sider">
        <SiderMenu />
      </Sider>
      <Content className="private-layout--content">
        {children}
      </Content>
    </Layout>
  );
};
