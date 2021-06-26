import React, { FC, useContext } from 'react';
import { Select } from 'antd';

import TurkeyFlag from '../../assets/turkey.svg';
import EnglishFlag from '../../assets/english.svg';

import { languageContext } from '../../contexts';

const { Option } = Select;

export const Language: FC = () => {
  const { language, setLanguage } = useContext<any>(languageContext);
  
  return (
     <Select onChange={setLanguage} defaultValue={language} style={{ width: 120 }}>
      <Option value="en-US">
        <img src={EnglishFlag} height="20"  alt="" />
        <span className="u-m-l-1">EN</span>
      </Option>
      <Option value="tr-TR">
        <img src={TurkeyFlag} height="20" alt="" />
        <span className="u-m-l-1">TR</span>
      </Option>
    </Select>
  );
};
