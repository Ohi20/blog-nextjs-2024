"use client";
import React from "react";
import Image from "next/image";
import fb from "public/1.png";
import insta from "public/2.png";
import twit from "public/3.png";
import yt from "public/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[50px] text-md flex flex-col lg:flex-row items-center justify-between">
      <div className="dark:text-[#bbb] light:text-black">
        <span className="mr-2 text-[#b64a13]">
          <FontAwesomeIcon icon={faCopyright} />
        </span>
        2024 Qouta. All rights reserved
      </div>
      <div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/probaad_ahmed_/"
            target="_blank"
          >
            <Image
              src={insta}
              width={15}
              height={15}
              className="opacity-80 cursor-pointer"
              alt="instagram"
            />
          </Link>
          <Link href="https://www.facebook.com/ashraf.ohi.1/" target="_blank">
            <Image
              src={fb}
              width={15}
              height={15}
              className="opacity-80 cursor-pointer"
              alt="facebook"
            />
          </Link>
          <Link
            href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
            target="_blank"
          >
            <Image
              src={twit}
              width={15}
              height={15}
              className="opacity-80 cursor-pointer"
              alt="twitter"
            />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank">
            <Image
              src={yt}
              width={15}
              height={15}
              className="opacity-80 cursor-pointer"
              alt="youtube"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
