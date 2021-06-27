import React, { FC } from 'react';
import { Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const CenterLoading: FC = () => {
  return (
    <div className="flex justify-center items-center vh-100">
      <Spin indicator={antIcon} />
    </div>
  );
};
