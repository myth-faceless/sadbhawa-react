import React from "react";
import GoogleMapComponent from "./GoogleMapComponent";
import { IoLocationOutline } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white h-fit">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
         
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Info
          </h1>
          <nav className=" flex flex-col gap-2">
            <div className="flex flex-row gap-2">
            <IoLocationOutline className="text-brightColor transition-all cursor-pointer" size={20} />
            <p>Budhanilkantha, Kathmandu, Nepal</p>
            </div>
            <div className="flex flex-row gap-2">
            <VscMail className="text-brightColor transition-all cursor-pointer" size={20} />
            <p>example@example.com</p>
            </div>
            <div className="flex flex-row gap-2">
            <IoPhonePortraitOutline className="text-brightColor transition-all cursor-pointer" size={20} />
            <p>+977-980000000</p>
            </div>
            
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Contact Us
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Testimonial
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Rating
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Social</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Facebook
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Twitter
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Youtube
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
      {/* second part footer */}
      <div className=" h-[25vh] border-t border-opacity-20 border-gray-400 flex flex-col justify-center ">
        <div>
            <nav className=" flex justify-center md:items-center gap-4">
              <FaFacebookF
                size={20}
                className="text-brightColor hover:text-gray-400 transition-all cursor-pointer"
              />
              <FaXTwitter
                size={20}
                className="text-brightColor hover:text-gray-400 transition-all cursor-pointer"
              />
              <FaInstagram
                size={20}
                className="text-brightColor hover:text-gray-400 transition-all cursor-pointer"
              />
            </nav>
          </div>
          <div>
            <h1 className="text-3xl font-bold font-serif flex justify-center py-5">Theater</h1>
          </div>
          <p>
            <p className=" text-center">
              <span className=" text-brightColor"> Sadbhawa Theater  </span> &copy; {new Date().getFullYear()} | All
              rights reserved
            </p>
          </p>
      </div>
    </div>
  );
};

export default Footer;