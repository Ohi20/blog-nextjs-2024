'use client';

import React from 'react';
import Image from 'next/image';
import contact from 'public/contact.png';
import Button from '@/components/Button/Button';


const metadata = {
  title: 'Contact',
  description: 'This is contact page',
};

const Contact = () => {
  return (
    <div className="my-8 px-12">
      <h1 className="text-4xl text-center text-[#b64a13] mb-8 font-semibold">Lets Keep in Touch</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="h-[300px] w-[300px]">
          <Image
            src={contact}
            sizes=""
            alt="contact"
            className="object-contain w-[300px] h-[200px]"
          />
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
          ></input>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
          ></input>
          <textarea
            className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
            placeholder="message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
         <div className='flex justify-center items-center'>
         <Button className="mx-auto" url="#" type="submit" text="Send" />
         </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
