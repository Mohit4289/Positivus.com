"use client";
import React, { useState } from "react";
import Image from "next/image";

const Team = () => {
  const images = ["/profile.png", "/profile2.png", "/profile3.png"];
  const names = ["John smith" , "Jane doe" , "Will chris"]
  const work =["CEO and Founder" , "Web Developer" , "Director of Opertaions"]
  return (
    <div className="mt-8">
      <div className="teamhead flex items-center gap-5">
        <h1 className="bg-[#B9FF66] text-2xl font-bold ">Teams</h1>
        <p className="w-[473px] h-[46]">
          Meet the skilled and experienced team behind our <br /> successful
          digital marketing strategies
        </p>
      </div>
      <div className="teams flex justify-center gap-8 mt-10">
        {images.map((index,i) => {
          return (
            <div className="flex items-start gap-8 p-5 border border-b-4 border-black rounded-2xl">
              <Image src={index} width={97} height={97} />
              <div>
              <h1 className=" text-lg font-bold">{names[i]}</h1>
              <h1 className="font-bold">{work[i]}</h1>
              </div>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="black" />
                <path
                  d="M9.31776 25H12.8131V13.6844H9.31776V25Z"
                  fill="#B9FF66"
                />
                <path
                  d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                  fill="#B9FF66"
                />
                <path
                  d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                  fill="#B9FF66"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
