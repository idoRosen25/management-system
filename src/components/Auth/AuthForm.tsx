'use client';
import { useState } from 'react';
import LoginForm from './LoginForm';
import Divider from '../Divider';
import SignupForm from './SignupForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white border border-gray-500 w-[25rem] m-auto p-6 rounded-lg shdow-sm">
      {isLogin ? <LoginForm /> : <SignupForm />}
      <Divider className="mt-4 mb-2" />
      <span className="text-sm text-black">
        Do not have an acount yet?{' '}
        <span
          className="text-sm text-blue-400 leading-sm cursor-pointer"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          Click here to register
        </span>
      </span>
    </div>
  );
};

export default AuthForm;
