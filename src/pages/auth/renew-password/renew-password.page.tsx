import React, { FC, useState, useEffect, useContext } from 'react';
import { Button, Form, Input, Spin, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';
import { authContext } from '../../../contexts';
import { CenterLoading } from '../../../components/shared';
import { authService } from '../../../services';
import Logo from '../../../assets/logo.svg';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const RenewPasswordPage: FC = () => {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();
  const { code } = useParams<{ code: string }>();
  const history = useHistory();
  const [isValidCode, setIsValidCode] = useState<boolean>(false);
  const { setToken } = useContext<any>(authContext);
  const [loading, setLoading] = useState(false);

  const handleCodeValid = (val: { code: string }) => {
    setLoading(true);
    authService
      .checkCode(val)
      .then(({ data }) => setIsValidCode(true))
      .catch((err) => {
        setIsValidCode(false);

        setTimeout(() => {
          history.push('auth/login');
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmit = (val: { password: string; code: string }) => {
    setLoading(true);

    val.code = code;

    authService
      .renewPassword(val)
      .then(({ data }) => {
        notification.success({
          message: 'Success',
          description: 'Password changed',
        });

        setToken(data.data.token);
      })
      .catch((err) => {
        notification.error({
          message: i18n.t('ERRORS.UNSUCCESSFULL'),
          description: 'Password didnt change',
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    handleCodeValid({ code });
  }, []);

  return (
    <>
      {loading && (
        <CenterLoading />
      )}

      {isValidCode && !loading && (
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
            name="password"
            rules={[{ required: true, message: i18n.t('ERRORS.INVALID_VALUE') }]}
          >
            <Input.Password size="large" placeholder={i18n.t('FIELDS.PASSWORD')} />
          </Form.Item>

          <Form.Item
            name="passwordagain"
            rules={[
              { required: true, message: i18n.t('ERRORS.INVALID_VALUE') },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords that you entered do not match!'),
                  );
                },
              }),
            ]}
          >
            <Input.Password size="large" placeholder={i18n.t('FIELDS.PASSWORD_AGAIN')} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {i18n.t('ACTIONS.SUBMIT')}
            </Button>
          </Form.Item>
        </Form>
      )}
      {!isValidCode && !loading && (
        <div className="flex justify-center items-center vh-100">
          <p>{i18n.t('ERRORS.INVALID_CODE')}</p>
        </div>
      )}
    </>
  );
};
