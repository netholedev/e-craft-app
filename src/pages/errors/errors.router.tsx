import './errors.scss';

import React from 'react';
import { Switch, RouteComponentProps, Route } from 'react-router-dom';
import { NotFoundPage } from './not-found';

type TParams = { url: string };

export const ErrorsRouter = ({ match }: RouteComponentProps<TParams>) => {
  const { url } = match;
  return (
    <Switch>
      <Route exact path={`${url}/`} component={NotFoundPage} />
    </Switch>
  );
};
