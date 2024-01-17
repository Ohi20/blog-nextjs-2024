'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import register from 'public/register.png';
import Image from 'next/image';

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push('/login?success=Account has been created');
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };

  return (
<div className="my-8 px-12">
      <h1 className="text-4xl text-center text-[#b64a13] mb-8 font-semibold"> Create an Account</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="h-[300px] w-[300px]">
          <Image
            src={register}
            sizes=""
            alt="contact"
            className="object-contain w-[300px] h-[200px]"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          required
          className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
        />
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
        <button className="p-3 w-full cursor-pointer outline-none bg-[#b64a13] text-white rounded">
          Register
        </button>
        {/* Error message */}
        {err && 'Something went wrong!'}
<div className='flex flex-col justify-center items-center'>
<span className="text-[#bbb]">- OR -</span>
      <Link
        className="underline font-medium dark:text-[#7d7c7c] light:text-black hover:text-[#bbb]"
        href="/login"
      >
        Login with an existing account
      </Link>
      </div>
      </form>
</div>
        
      </div>
  );
};

export default Register;