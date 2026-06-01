"use client";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#171722]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/assets/abdullah.jpg"
              alt="logo"
              width={45}
              height={45}
              className="h-[45px] w-[45px] rounded-full"
            />
            <span className="text-[#aa76db] ml-3 text-xl">Abdullah</span>{" "}
            <span className="text-white">Azhar</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 Portfolio —
            <a
              href="https://www.facebook.com/abdullah.azhar.7549/"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @abdullahazhar
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href="https://www.facebook.com/abdullah.azhar.7549/"
              target="_blank"
              className="text-gray-600"
            >
              <BiLogoFacebookSquare className="h-[20px] w-[20px] hover:h-[25px] hover:text-blue-500 hover:w-[25px] mx-1.2" />
            </Link>
            <Link href={""} className="ml-3 text-gray-500">
              <FaTwitter className="h-[20px] w-[20px] hover:h-[25px] hover:text-white hover:w-[25px] mx-1.2" />
            </Link>
            <Link
              href={"https://www.instagram.com/the.abdullah1.0"}
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <SiInstagram className="h-[20px] w-[20px] hover:h-[25px] hover:text-pink-600 hover:w-[25px] mx-1.2" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/abdullah-azhar-162844242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <FaLinkedin className="h-[20px] w-[20px] hover:h-[25px] hover:text-blue-500 hover:w-[25px] mx-1.2" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
