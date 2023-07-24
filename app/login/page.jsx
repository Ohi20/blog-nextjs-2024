'use client';
import React, { useEffect, useState } from 'react';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Loading from '@/components/Loading/Loading';



const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setError(params.get('error'));
    setSuccess(params.get('success'));
  }, [params]);

  if (session.status === 'loading') {
    return <Loading />;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', {
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <h1 className="dark:text-[#bbb] light:text-black">
        {success ? success : 'Welcome Back'}
      </h1>
      <h2 className="font-semibold text-[#52c28b]">
        Please sign in to see the dashboard.
      </h2>

      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          required
          className="p-4 bg-transparent dark:text-[#bbb] light:text-black border border-[#bbb] dark:border-[#bbb] light:border-[#111] text-sm font-semibold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-4 bg-transparent dark:text-[#bbb] light:text-black border border-[#bbb] dark:border-[#bbb] light:border-[#111] text-sm font-semibold"
        />
        <button className="bg-[#52c28b] p-4 w-[300px] rounded-md border-none text-[#eee] hover:text-[#bbb]">
          Login
        </button>
        {error && error}
      </form>

      <button
        onClick={() => {
          signIn('google');
        }}
        className="bg-red-500 p-4 w-[300px] rounded-md border-none text-[#eee] hover:text-[#bbb]"
      >
        Login with Google
      </button>
      <span className="text-[#bbb]">- OR -</span>
      <Link
        className="underline font-medium dark:text-[#7d7c7c] light:text-black hover:text-[#bbb]"
        href="/register"
      >
        Create new account
      </Link>

      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;