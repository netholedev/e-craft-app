import React, { FC } from 'react';
import { Row } from 'antd';
import { Header } from './Header';

export const PrivateLayout: FC = ({ children }) => {
  return (
    <>
      <Row>{children}</Row>
    </>
  );
};
