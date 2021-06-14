import React, { FC } from 'react';
import { PrivateLayout } from '../components';
import { useAuth } from '../contexts';

export const Home: FC = () => {
  const { logout } = useAuth();
  return (
    <PrivateLayout>
      <button onClick={logout} />
    </PrivateLayout>
  );
};
