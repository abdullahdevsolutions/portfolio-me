// "use client"
import Image from "next/image";
import Link from "next/link";

import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <div>
      <section className="text-white body-font bg-[#000021]" id="top-hero">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-10">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-[#aa76db]">
           <span className="text-white">I am</span>
              <br className="hidden lg:inline-block" />
              <Typewriter 
  options={{
    strings: ['Web Developer', 'Computer Science Student',"UI/UX Designer"],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            <p className="mb-8 leading-relaxed">
  I&rsquo;m a dedicated Web Developer with 2 years of hands-on experience in building dynamic and scalable web applications using PHP, CodeIgniter, and Laravel. Currently pursuing my BSCS at Szabist University, I enjoy transforming ideas into real-world solutions that are clean, efficient, and user-friendly. Whether it&rsquo;s front-end design or back-end logic, I aim to craft experiences that not only work—but feel great to use.
</p>

            <div className="flex justify-center">
                <a href="#Contact">

              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-red-300 group-hover:from-red-600 group-hover:to-red-500 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Contact
                </span>
              </button>
                </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
               height={400}
               width={400}
              className="object-cover object-center rounded-full mx-auto shadow-lg shadow-white"
              alt="abdulllah"
             src="/assets/abd.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
