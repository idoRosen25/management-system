'use client';
import { useState } from 'react';
import Divider from '../Divider';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useRouter } from 'next/navigation';
import { Routes } from '../../consts';

type Props = {
  isLoggedIn: boolean;
};
const AuthForm = ({ isLoggedIn }: Props) => {
  const router = useRouter();

  if (isLoggedIn) {
    router.replace(Routes.DASHBOARD, { scroll: true });
  }
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="bg-white border border-gray-500 w-[25rem] m-auto p-6 rounded-lg shdow-sm">
      {isLogin ? <LoginForm /> : <SignupForm />}
      <Divider className="mt-4 mb-2" />
      <span className="text-sm text-black">
        {!isLogin ? 'Already have an account? ' : 'Do not have an acount yet? '}
        <span
          className="text-sm text-blue-400 leading-sm cursor-pointer"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          Click here to {isLogin ? 'register' : 'login'}
        </span>
      </span>
    </div>
  );
};

export default AuthForm;
