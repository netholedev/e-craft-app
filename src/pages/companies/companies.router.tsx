import './companies.scss';

import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';
import { PublicRoute } from '../../components';
import { CompaniesPage } from './companies';

type TParams = { url: string };

export const CompaniesRouter = ({ match }: RouteComponentProps<TParams>) => {
  const { url } = match;
  return (
    <Switch>
      <PublicRoute exact path={`${url}/`} component={CompaniesPage} />
    </Switch>
  );
};
