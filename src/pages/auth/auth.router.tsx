import './auth.scss';

import React from 'react';
import { Switch, RouteComponentProps, Redirect } from 'react-router-dom';
import { PublicRoute } from '../../components';

import { LoginPage } from './login';
import { ForgotPasswordPage } from './forgot-password';
import { RenewPasswordPage } from './renew-password';

type TParams = { url: string };

export const AuthRouter = ({ match }: RouteComponentProps<TParams>) => {
  const { url } = match;
  return (
    <Switch>
      <PublicRoute exact path={`${url}/`} component={() => <Redirect to="/auth/login" />} />
      <PublicRoute exact path={`${url}/login`} component={LoginPage} />
      <PublicRoute exact path={`${url}/forgot-password`} component={ForgotPasswordPage} />
      <PublicRoute exact path={`${url}/renew-password/:code`} component={RenewPasswordPage} />
      <Redirect to="/errors/not-found" />
    </Switch>
  );
};
