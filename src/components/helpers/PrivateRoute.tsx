import React from 'react';
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../../contexts';
import { CenterLoading } from '../shared';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { profile, loading } = useContext<any>(authContext);
  
  return (
    <>
      {
        loading && <CenterLoading />
      }
      {
        !loading && <Route
          {...rest}
          render={(props) => (profile?.id ? <Component {...props} /> : <Redirect to="/auth" />)}
        />
      }
      
    </>
  );
};
