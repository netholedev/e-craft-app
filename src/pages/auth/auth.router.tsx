import './auth.scss';

import React from 'react';
import { Switch, RouteComponentProps, Redirect } from 'react-router-dom';
import { PublicRoute } from '../../components';
import { LoginPage } from './login';

type TParams = { url: string };

export const AuthRouter = ({ match }: RouteComponentProps<TParams>) => {
  const { url } = match;

  return (
    <Switch>
      <PublicRoute exact path={`${url}/`} component={() => <Redirect to="/auth/login" />} />
      <PublicRoute exact path={`${url}/login`} component={LoginPage} />
      <Redirect to="/auth/login" /> 
    </Switch>
  );
};