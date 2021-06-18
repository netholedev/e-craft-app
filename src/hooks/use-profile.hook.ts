import { useState } from 'react';
import { ICurrentUser } from '../interfaces';

export function useProfile() {
  const [profile, setProfile] = useState<ICurrentUser | null>(null);

  return { profile, setProfile };
}
