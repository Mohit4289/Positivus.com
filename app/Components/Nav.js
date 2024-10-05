"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="upper flex justify-between items-center">
      <Image src="/logo.png" width={200} height={36} />
      <nav className="nav flex justify-between items-center gap-4 ">
        <h1>
          <Link
            href=""
            className="hover:border-t-2 hover:border-b-2 border-black py-1 transition-all duration-300"
          >
            About us
          </Link>
        </h1>
        <h1>
          <Link
            href=""
            className="hover:border-t-2 hover:border-b-2 border-black py-1 transition-all duration-300"
          >
            Services
          </Link>
        </h1>
        <h1>
          <Link
            href=""
            className="hover:border-t-2 hover:border-b-2 border-black py-1 transition-all duration-300"
          >
            Use Cases
          </Link>
        </h1>
        <h1>
          <Link
            href=""
            className="hover:border-t-2 hover:border-b-2 border-black py-1 transition-all duration-300"
          >
            Pricing
          </Link>
        </h1>
        <h1>
          <Link
            href=""
            className="hover:border-t-2 hover:border-b-2 border-black py-1 transition-all duration-300"
          >
            Blog
          </Link>
        </h1>
        <h1 className="border border-black p-2 rounded-md">
          <Link
            href=""
            className="hover:border-t-2 hover:border-b-2 border-black py-1 transition-all duration-300"
          >
            Request a quote
          </Link>
        </h1>
      </nav>
    </div>
  );
};

export default Nav;
