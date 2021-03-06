import './companies.scss';

import React from 'react';
import { Switch, RouteComponentProps, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../../components';
import { CompaniesPage } from './companies';

type TParams = { url: string };

export const CompaniesRouter = ({ match }: RouteComponentProps<TParams>) => {
  const { url } = match;
  
  return (
    <Switch>
      <PrivateRoute exact path={`${url}/`} component={CompaniesPage} />
      <Redirect to="/errors/not-found" />
    </Switch>
  );
};
