import './auth.scss';

import React from 'react';
import { Switch, RouteComponentProps, Redirect } from 'react-router-dom';
import { PublicRoute } from '../../components';
import { ForgotPasswordPage, LoginPage } from './login';
import { ResetPasswordPage } from './login/reset-password.page';

type TParams = { url: string };

export const AuthRouter = ({ match }: RouteComponentProps<TParams>) => {
  const { url } = match;

  return (
    <Switch>
      <PublicRoute exact path={`${url}/`} component={() => <Redirect to="/auth/login" />} />
      <PublicRoute exact path={`${url}/login`} component={LoginPage} />
      <PublicRoute exact path={`${url}/forgot-password`} component={ForgotPasswordPage} />
      <PublicRoute exact path={`${url}/reset-password`} component={ResetPasswordPage} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};
