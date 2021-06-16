import React, { FC } from 'react';
import { Row } from 'antd';

import { Header } from '../shared';

export const PrivateLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Row>{children}</Row>
    </>
  );
};
