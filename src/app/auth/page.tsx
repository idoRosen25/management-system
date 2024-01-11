import dynamic from 'next/dynamic';
import { isAuthenticated } from '../../utils/auth';

const AuthForm = dynamic(() => import('@/components/Auth/AuthForm'), {
  ssr: false,
});

export default function Auth() {
  const isLoggedIn = isAuthenticated();
  return (
    <section className="bg-indigo-600 h-screen flex">
      <AuthForm isLoggedIn={isLoggedIn} />
    </section>
  );
}
