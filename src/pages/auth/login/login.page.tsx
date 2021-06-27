import React, { FC, useContext, useState } from 'react';
import { Alert, Button, Checkbox, Form, Input, Typography, notification } from 'antd';
import { useTranslation } from 'react-i18next';

import { authService } from '../../../services';
import { authContext } from '../../../contexts';
import Logo from '../../../assets/logo.svg';

import { Link } from 'react-router-dom';

const { Text } = Typography;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const LoginPage: FC = () => {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();
  const { setToken } = useContext<any>(authContext);
  const [loading, setLoading] = useState(false);

  const onSubmit = (val: { email: string; password: string }) => {
    setLoading(true);
    authService
      .login(val)
      .then(({ data }) => setToken(data.data.token))
      .catch((err) => {
        notification.error({
          message: i18n.t('ERRORS.UNSUCCESSFULL'),
          description: i18n.t('ERRORS.INVALID_USER_CREDENTIALS'),
        });
      })
      .finally(() => setLoading(false));
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
        name="email"
        rules={[{ required: true, message: i18n.t('ERRORS.INVALID_EMAIL'), type: 'email' }]}
      >
        <Input size="large" placeholder={i18n.t('FIELDS.EMAIL')} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: i18n.t('ERRORS.INVALID_VALUE') }]}
      >
        <Input.Password size="large" placeholder={i18n.t('FIELDS.PASSWORD')} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          {i18n.t('ACTIONS.SUBMIT')}
        </Button>

        <div className="auth-form-forgot">
          <Link to="/auth/forgot-password">
            <Text type="secondary">Forgot password</Text>
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};
