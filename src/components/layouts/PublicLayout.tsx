import React, { FC } from 'react';
import { Row, Col } from 'antd';

import BgImg from '../../assets/bg.jpg';

import { Language } from '../shared';

export const PublicLayout: FC = ({ children }) => {
  return (
    <Row className="public-layout">
      <Col xs={0} sm={0} md={0} lg={0} xl={12}>
        <img className="public-layout--right" style={{ backgroundImage: `url(${BgImg})` }} alt="" />
      </Col>
      <Col xs={18} sm={12} md={12} lg={12} xl={6} className="public-layout--left">
        <div className="public-layout--language">
          <Language />
        </div>
        {children}
      </Col>
    </Row>
  );
};
