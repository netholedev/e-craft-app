import React, { FC, useContext } from 'react';
import { Button, Form, Input, Typography, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { authService } from '../../../services';
import Logo from '../../../assets/logo.svg';
import { authContext } from '../../../contexts';

const { Text } = Typography;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const ForgotPasswordPage: FC = () => {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();
  const { setToken, profile, setLoading, loading } = useContext<any>(authContext);

  const onSubmit = (val: { email: string }) => {
    setLoading(true);

    authService
      .forgotPassword(val)
      .then(({ data }) => {
        notification.success({
          message: 'Success',
          description: 'Email sent successfully',
        });
      })
      .catch((err) => {
        notification.error({
          message: i18n.t('ERRORS.UNSUCCESSFULL'),
          description: 'Email not found',
        });
      })
      .finally(() => {
        setLoading(false);
      });
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

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          {i18n.t('ACTIONS.SUBMIT')}
        </Button>

        <div className="auth-form-forgot">
          <Link to="/auth/login">
            <Text type="secondary">Remember Password</Text>
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};
