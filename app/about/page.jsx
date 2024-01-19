import React from "react";
import Image from "next/image";
import about from "public/about.jpg";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className="px-12">
      <div className="w-full h-[300px] relative">
        <Image
          src={about}
          fill={true}
          alt="About Hero"
          className="object-contain sepia"
        />
        <div className="absolute bottom-4 left-4 p-4 bg-[#b64a13] text-white">
          <h1 className="">Learn Programming Languages</h1>
          <h2 className="">
            Handcrafting blogs,position,events and digital experiences
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#b64a13] text-3xl font-bold">Who Are We?</h1>
          <p className="text-md font-semibold text-justify">
            Qouta is optimized for learning and training. Examples might be
            simplified to improve reading and learning. Tutorials, references,
            and examples are constantly reviewed to avoid errors, but we cannot
            warrant full correctness of all content. While using Qouta, you
            agree to have read and accepted our terms of use, cookie and privacy
            policy. Qouta is a popular online platform that provides web
            development tutorials and references for various web technologies.
            It serves as a comprehensive resource for individuals who are
            learning or looking to enhance their skills in HTML, CSS,
            JavaScript, and other related technologies.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#b64a13] text-3xl font-bold">What We Do?</h1>
          <p className="text-md font-semibold text-justify">
            The website offers a wide range of educational materials, including
            beginner-friendly tutorials, interactive examples, and hands-on
            exercises. These resources are designed to help users understand the
            fundamentals of web development and gain practical experience. Users
            can learn about topics such as web design, front-end development,
            back-end development, database management, and more.
          </p>
          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
