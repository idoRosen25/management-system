import { subDays } from 'date-fns';
import { cookies } from 'next/headers';

export const isAuthenticated = () => {
  const lastLogin = cookies().get('lastLogin');

  if (!lastLogin?.value) return false;

  if (new Date(lastLogin.value).getTime() < subDays(new Date(), 7).getTime())
    return false;

  return true;
};
