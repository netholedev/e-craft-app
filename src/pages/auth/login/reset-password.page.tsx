import React, { FC } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { authService } from '../../../services';
import Logo from '../../../assets/logo.svg';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const ResetPasswordPage: FC = () => {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();

  const onSubmit = (val: { email: string }) => {
    authService.forgotPassword(val);
    // .then(({ data }) => setToken(data.data.token))
    // .catch((err) => {
    //   setLoading(false);
    //   console.log(err!);
    // });
  };

  return (
    <Form
      validateTrigger={['onBlur']}
      {...layout}
      form={form}
      name="basic"
      onFinish={onSubmit}
      className="flex flex-column justify-center w-100"
    >
      <img className="sign-in-logo" src={Logo}></img>

      <Form.Item
        name="newpassword"
        rules={[{ required: true, message: i18n.t('ERRORS.INVALID_VALUE') }]}
      >
        <Input size="large" placeholder={i18n.t('FIELDS.PASSWORD')} />
      </Form.Item>

      <Form.Item
        name="newpasswordagain"
        rules={[{ required: true, message: i18n.t('ERRORS.INVALID_VALUE') }]}
      >
        <Input size="large" placeholder={i18n.t('FIELDS.PASSWORD_AGAIN')} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {i18n.t('ACTIONS.SUBMIT')}
        </Button>
      </Form.Item>
    </Form>
  );
};
