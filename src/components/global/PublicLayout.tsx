import React, { FC } from 'react';
import { Row } from 'antd';

export const PublicLayout: FC = ({ children }) => {
  return <Row className="public-layout">{children}</Row>;
};
