import React from 'react';
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../../contexts';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { profile } = useContext<any>(authContext);

  return (
    <Route
      {...rest}
      render={(props) => (profile?.id ? <Component {...props} /> : <Redirect to="/auth" />)}
    />
  );
};
