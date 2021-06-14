import React, { FC, useEffect, useState } from 'react';
import { Alert, Button, Col, Divider, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

import './auth.scss';
import BgImg from '../../assets/bg.jpg';

import { PublicLayout } from '../../components';
import { useAuth } from '../../contexts';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const AuthPage: FC = () => {
  const { user, loading, errors, login, setErrors } = useAuth();
  const { i18n } = useTranslation();
  const [form] = Form.useForm();

  const mapErrors = (e: string) =>
    setErrors((errors as string[]).filter((err: string) => err !== e));

  useEffect(() => {
    setErrors(errors as string[]);
    return;
  }, errors);

  return (
    <PublicLayout>
      <Col span={12} className="auth-background" style={{ backgroundImage: `url(${BgImg})` }}></Col>
      <Col span={12} className="auth-form">
        {user?.email}
        {errors &&
          errors.map((e: string) => (
            <Alert
              className="auth-form-error-alert"
              message={e}
              type="error"
              closable
              showIcon
              onClose={() => mapErrors(e)}
            />
          ))}

        <Form {...layout} form={form} name="basic">
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
              onClick={() => login(form.getFieldsValue())}
              block
              loading={loading}
            >
              {i18n.t('ACTIONS.SUBMIT')}
            </Button>
          </Form.Item>
        </Form>
        <Divider />
      </Col>
    </PublicLayout>
  );
};
