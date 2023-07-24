'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
        router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8">
      <h1 className="dark:text-[#bbb] light:text-black">Create an Account</h1>
      <h2 className="font-semibold text-[#52c28b]">
        Please sign up to see the dashboard.
      </h2>
      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          required
          className="p-4 bg-transparent dark:text-[#bbb] light:text-black border border-[#bbb] dark:border-[#bbb] light:border-[#111] text-sm font-semibold"
        />
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
          Register
        </button>
        {/* Error message */}
        {err && 'Something went wrong!'}
      </form>
      <span className="text-[#bbb]">- OR -</span>
      <Link
        className="underline font-medium dark:text-[#7d7c7c] light:text-black hover:text-[#bbb]"
        href="/login"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;