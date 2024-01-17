"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import logo from "public/logo.png";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      {/* Logo container */}
      <div className="flex items-center  mr-6 lg:mr-72">
        <Image
          src={logo}
          className="h-[120px] w-[120px] object-contain"
          alt="Logo"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      {/* Links container */}
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-8 ${
          isOpen ? "block p-2 lg:border-none" : "hidden"
        }`}
      >
        <DarkModeToggle />

        <div className="text-sm gap-4 text-[#B64A13] font-bold lg:font-medium lg:flex-grow">
          {/* <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Home
          </Link> */}
          <Link
            href="/"
            className={
              router.pathname == "/"
                ? "active"
                : "block hover:text-[#ffffff] mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
            }
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="block hover:text-[#ffffff] mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="block hover:text-[#ffffff] mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:text-[#ffffff] mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="block hover:text-[#ffffff] mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Dashboard
          </Link>
          {session.status === "authenticated" ? (
            <button
              className="mt-2 p-1 outline-none bg-red-500 text-white pointer rounded"
              onClick={signOut}
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              logout
            </button>
          ) : (
            <Link href="/login" className="lg:inline-block lg:mt-0 mr-4">
              <button className="mt-2 p-1 outline-none bg-[#b64a13] text-white pointer rounded">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
