'use client';
import LoginForm from './LoginForm';
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
  return <></>;
};

export default AuthForm;
