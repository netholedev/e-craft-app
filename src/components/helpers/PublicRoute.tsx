import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../../contexts';
import { CenterLoading } from '../shared';

export const PublicRoute = ({ component: Component, ...rest }: any) => {
  const { profile, loading } = useContext<any>(authContext);

  return (
  <>
    {
      loading && <CenterLoading />
    }
    {
      !loading && 
        <Route
          {...rest}
          render={(props) => (profile?.id ? <Redirect to="/" /> : <Component {...props} />)}
        />
    }
  </>
  );
};
