"use client"
import Link from "next/link";
import Image from "next/image";
import { IoCloudDownloadSharp } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="bg-[#12123e] sticky top-0 z-50">
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            <Image
              src="/assets/abdullah.jpg"
              alt="Abdullah"
              width={45}
              height={45}
              className="h-[45px] w-[45px] shadow-lg hover:shadow-none rounded-full"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl text-white"><span className="text-[#aa76db]">Abdullah</span> Azhar</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
            <Link href="/" className="mr-5 hover:text-orange-600 hover:text-xl">
              Home
            </Link>
            <Link href="#About" className="mr-5 hover:text-orange-600 hover:text-xl">
              About
            </Link>
            <Link href="#Skill" className="mr-5 hover:text-orange-600 hover:text-xl">
              Skills
            </Link>
            <Link href="#Project" className="mr-5 hover:text-orange-600 hover:text-xl">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-orange-600 hover:text-xl">
              Contact
            </Link>
          </nav>
          <a href="/assets/Abdullah Azhar.pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
            <IoCloudDownloadSharp className="ml-3 text-[22px] hover:text-[25px] hover:text-green-600" />
          </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
