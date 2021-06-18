import React, { FC } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { authService } from '../../../services';
import Logo from '../../../assets/logo.svg';

const { Text } = Typography;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const LoginPage: FC = () => {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();

  const onSubmit = (val: any) => {
    authService
      .login(val)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err!));
  };

  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      onFinish={onSubmit}
      className="flex flex-column justify-center w-100"
    >
      <div className="sign-up-text">
        <Text type="secondary">
          Don’t have an account?
          <Text strong type="success" style={{ marginLeft: 0.5 + 'rem' }}>
            Sign up now
          </Text>
        </Text>
      </div>

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
        <Button
          type="primary"
          htmlType="submit"
          block
          // loading={loading}
        >
          {i18n.t('ACTIONS.SUBMIT')}
        </Button>

        <div className="auth-form-forgot">
          <Text strong type="secondary">
            Forgot password
          </Text>
        </div>
      </Form.Item>
    </Form>
  );
};
