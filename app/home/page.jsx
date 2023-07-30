import React from 'react';
import Image from 'next/image';
import emoji from 'public/emoji.png';
import Button from '@/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
     return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4 mb-4">
      <div className="flex-1 flex flex-col justify-center items-center gap-4 p-10">
        <h1 className="text-5xl my-6">
          <span className="light:text-[#12100E] dark:text-[#8693AB] font-bold">Share</span> Your thoughts <span><FontAwesomeIcon icon={faLightbulb} /></span></h1>
        <p className="text-3xl font-light">
          Turning your Idea into Reality. We bring together to the global chess
          world.
        </p>

        <div className="flex justify-evenly gap-4 my-8">

          <Button url="/blogs" text="See Our Blogs"/>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <Image
          src={emoji}
          alt="hero"
          className="object-cover h-auto w-auto animate-pulse duration-1000"
        />
      </div>
    </div>
  );
}

export default HomePage;