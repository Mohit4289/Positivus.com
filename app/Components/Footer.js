"use client"
import React from "react";
import Image from "next/image"

const Footer = () => {
  return (
    <div>
      <div className="contact flex  items-center gap-7 mt-8 mb-10">
        <h1 className="text-2xl font-bold bg-[#B9FF66]">Contact Us</h1>
        <p>
          Connect with Us: Let's Discuss <br /> Your Digital Marketing Needs
        </p>
      </div>
      <div className="flex justify-between gap-28 mt-7 bg-[#F3F3F3] w-[100%] h-[473px] py-[40px] px-[50px] rounded-2xl overflow-hidden">
        <div>
          <div className="flex items-center">
            <input
              id="sayHi"
              name="choice"
              type="radio"
              className="w-5 h-5 text-[#B9FF66] border-gray-300 focus:ring-[#B9FF66]"
            />
            <label
              htmlFor="sayHi"
              className="mr-3 ml-2 text-sm font-medium text-gray-900"
            >
              Say hi
            </label>

            <input
              id="getQuote"
              name="choice"
              type="radio"
              className="w-5 h-5  border-gray-300 focus:ring-[#B9FF66]"
            />
            <label
              htmlFor="getQuote"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Get quote
            </label>
          </div>
          <div className="inputs mt-8">
            <label>Name</label> <br />
            <input
              type="text"
              placeholder="Name"
              className="border border-black w-[350px] h-[60] p-2 rounded-lg mb-6"
            />{" "}
            <br />
            <label>Email*</label> <br />
            <input
              type="email"
              placeholder="Name"
              className="border border-black w-[350px] p-2 rounded-lg mb-6"
            />{" "}
            <br />
            <label>Message*</label> <br />
            <textarea
              className="border w-[350px] h-[100px] border-black rounded-lg p-2"
              placeholder="Messages"
            ></textarea>
            <button className="bg-black w-[350px] text-center text-white mt-6 rounded-md p-2 mb-4">Send Message</button>
          </div>
        </div>
        <Image src="/footer.png"
        width={400}
        height={1000}
        className="ml-[400px]"
        />
      </div>
    </div>
  );
};

export default Footer;
