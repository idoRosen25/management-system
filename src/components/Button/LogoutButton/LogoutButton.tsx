import dynamic from 'next/dynamic';
import { isAuthenticated } from '../../../utils/auth';
import { deleteCookie } from '../../../utils/cookie';

const Button = dynamic(() => import('./Component'), { ssr: false });

const handleLogout = async () => {
  'use server';
  const logout = deleteCookie('access_token');
  console.log('logout response: ', logout);
  console.log('is authed: ', isAuthenticated());
};
const LogoutButton = ({ className = '' }: { className?: string }) => {
  return <Button className={className} handleLogout={handleLogout} />;
};

export default LogoutButton;
