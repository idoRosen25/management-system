import dynamic from 'next/dynamic';
import React from 'react';

const AuthForm = dynamic(() => import('@/components/Auth/AuthForm'), {
  ssr: false,
});

export default function Auth() {
  return (
    <section className="bg-indigo-600 h-screen flex">
      <AuthForm />
    </section>
  );
}
