'use client';
import React, { useEffect, useState } from 'react';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Loading from '@/components/Loading/Loading';
import login from 'public/login.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
<div className="my-8 px-12">
      <h1 className="text-4xl text-center text-[#b64a13] mb-8 font-semibold"> {success ? success : 'Welcome Back'}</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="h-[300px] w-[300px]">
          <Image
            src={login}
            sizes=""
            alt="contact"
            className="object-contain w-[300px] h-[200px]"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          required
          className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
        />
        <div className='flex justify-center items-center'>
        <button className="p-3 w-full cursor-pointer outline-none bg-[#b64a13] text-white rounded">
        Login
      </button>
        </div>
        {error && error}

<div className='flex justify-center items-center'>
<button
        onClick={() => {
          signIn('google');
        }}
        className="p-3 w-full cursor-pointer outline-none bg-red-500 text-white rounded"
      >
        Login With Google<span><FontAwesomeIcon icon="fa-brands fa-google" /></span>
      </button>
</div>
      
      <div className='flex flex-col justify-center items-center'>
      <span>- OR -</span>
      <Link
        className="underline font-medium"
        href="/register"
      >
        Create new account
      </Link>
      </div>

      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
      </form>
      </div>
    </div>
  );
};

export default Login;