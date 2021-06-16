import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from 'Shared/Utils';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        false ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};
