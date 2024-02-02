import AppLogo from '@/components/Logo/AppLogo';
import LoginForm from '../../components/Auth/LoginForm';
import PlatformLogo from '../../../public/logo-icon.png';

export default function Auth() {
  return (
    <section className="bg-indigo-600 h-screen flex-col">
      <AppLogo logo={PlatformLogo} />
      <div className="bg-white border border-gray-500 w-[25rem] m-auto p-6 rounded-lg shdow-sm">
        <LoginForm />
      </div>
    </section>
  );
}
