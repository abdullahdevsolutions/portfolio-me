"use client"
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiCodeigniter, SiLaravel, SiTailwindcss } from "react-icons/si";

const Skill = () => {
  return (
    <div id="Skill">
      <section className="text-gray-600 body-font bg-[#000021]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        What i have done so far
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
        Work Experience
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2  xl:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-400 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
            <TfiHtml5 />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            <span>HTML Developer </span>
            <br />
            <span>(2019-2020)</span>
            </h2>
          </div>
          <div className="flex-grow">
            
            <p className="leading-relaxed text-base line-clamp-3 text-black">
            HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="h-1 w-full bg-orange-600 mt-3"></div>
            <p className="text-orange-600 text-right">100%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/2 xl:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-400 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoLogoCss3 />

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            <span>CSS Developer </span>
            <br />
            <span>(2020-2021)</span> 
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base line-clamp-3 text-black">
            CSS can be used for very basic document text styling — for example, for changing the color and size of headings and links.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="h-1 w-full bg-blue-500 mt-3"></div>
            <p className="text-blue-500 text-right">100%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/2 xl:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-400 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
            <DiJavascript />


            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              <span>JavaScript Developer</span>
              <br />
              <span>(2021-2023)</span>
            </h2>
          </div>
          <div className="flex-grow text-black">
            <p className="leading-relaxed text-base line-clamp-3">
            JavaScript is a dynamic programming language that is used for web development, in web applications, for game development, and lots more.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="h-1 w-full bg-white mt-3">
              <div className="h-1 w-[230px] bg-yellow-400 absolute"></div>
            </div>
            <p className="text-yellow-400 text-right">80%</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/2 xl:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-400 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <SiTypescript />

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              <span>TypeScript Developer</span>
              <br />
              <span>(2023-2024)</span>
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-black line-clamp-3">
            TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="h-1 w-full bg-white mt-3">
              <div className="h-1 w-[230px] bg-blue-500 absolute"></div>
            </div>
            <p className="text-blue-500 text-right">80%</p>
          </div>
        </div>
      </div>
      {/* Tailwind CSS Card */}
<div className="p-4 md:w-1/2 xl:w-1/4">
  <div className="flex rounded-lg h-full bg-gray-400 p-8 flex-col">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-500 text-white flex-shrink-0">
        <SiTailwindcss />
      </div>
      <h2 className="text-gray-900 text-lg title-font font-medium">
        <span>Tailwind CSS Developer</span>
        <br />
        <span>(2024-Present)</span>
      </h2>
    </div>
    <div className="flex-grow text-black">
      <p className="leading-relaxed text-base line-clamp-3">
        Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design directly in your markup.
      </p>
      <a className="mt-3 text-indigo-500 inline-flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <div className="h-1 w-full bg-cyan-500 mt-3"></div>
      <p className="text-cyan-500 text-right">95%</p>
    </div>
  </div>
</div>
      {/* CodeIgniter Card */}
<div className="p-4 md:w-1/2 xl:w-1/4">
  <div className="flex rounded-lg h-full bg-gray-400 p-8 flex-col">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-600 text-white flex-shrink-0">
        <SiCodeigniter />
      </div>
      <h2 className="text-gray-900 text-lg title-font font-medium">
        <span>CodeIgniter Developer</span>
        <br />
        <span>(2025-Present)</span>
      </h2>
    </div>
    <div className="flex-grow text-black">
      <p className="leading-relaxed text-base line-clamp-3">
        CodeIgniter is a powerful PHP framework with a small footprint, designed for developers who need a simple and elegant toolkit.
      </p>
      <a className="mt-3 text-indigo-500 inline-flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <div className="h-1 w-full bg-red-600 mt-3"></div>
      <p className="text-red-600 text-right">90%</p>
    </div>
  </div>
</div>

{/* Laravel Card */}
<div className="p-4 md:w-1/2 xl:w-1/4">
  <div className="flex rounded-lg h-full bg-gray-400 p-8 flex-col">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
        <SiLaravel />
      </div>
      <h2 className="text-gray-900 text-lg title-font font-medium">
        <span>Laravel Developer</span>
        <br />
        <span>(2025-Present)</span>
      </h2>
    </div>
    <div className="flex-grow text-black">
      <p className="leading-relaxed text-base line-clamp-3">
        Laravel is a PHP web application framework with expressive, elegant syntax. It&rsquo;s used for building robust and secure web applications.
      </p>
      <a className="mt-3 text-indigo-500 inline-flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <div className="h-1 w-full bg-red-700 mt-3"></div>
      <p className="text-red-700 text-right">85%</p>
    </div>
  </div>
</div>



    </div>
  </div>
</section>

    </div>
  )
}

export default Skill
