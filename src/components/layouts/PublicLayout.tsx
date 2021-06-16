import React, { FC } from 'react';
import { Row , Col} from 'antd';
import BgImg from '../../assets/bg.jpg';

export const PublicLayout: FC = ({ children }) => {
  return(
  <Row className="public-layout">
    <Col xs={0} sm={0} md={0} lg={0} xl={12}>
      <img
        className="public-layout--right"
        style={{ backgroundImage: `url(${BgImg})` }} 
        alt=""
      />
    </Col>
    <Col xs={24} sm={24} md={24} lg={24} xl={6} className="public-layout--left" >
      {children}
    </Col>
  </Row>
)};
