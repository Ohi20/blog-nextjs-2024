import React from 'react';
import Image from 'next/image';
import ball from 'public/ball.png';

const HomePage = () => {
     return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4">
      <div className="flex-1 flex flex-col justify-center items-center gap-4 p-10">
        <h1 className="text-5xl my-6">
          <span className="light:text-[#12100E] dark:text-[#8693AB] font-bold">Share</span> Your thoughts
        </h1>
        <p className="text-3xl font-light">
          Turning your Idea into Reality. We bring together to the global chess
          world.
        </p>

        <div className="flex justify-evenly gap-4 my-8">
            <button>See our blogs</button>
            <button>See our works</button>
          {/* <Button url="/blog" text="See Our Blogs" />
          <Button url="/portfolio" text="See Our Works" /> */}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-4 animate-bounce duration-75">
        <Image
          src={ball}
          alt="hero"
          className="object-cover h-auto w-auto mt-10"
        />
      </div>
    </div>
  );
}

export default HomePage;