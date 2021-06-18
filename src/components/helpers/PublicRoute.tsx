import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../../contexts';

export const PublicRoute = ({ component: Component, ...rest }: any) => {
  const { profile } = useContext<any>(authContext);

  return (
    <Route
      {...rest}
      render={(props) => (profile?.id ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};
