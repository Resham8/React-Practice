import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="z-31">
          <img
            src={isOpen ? "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg" : "http://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg" }
            alt=""
          />
        </div>
        
        <div className="hidden items-center space-x-10 uppercase text-gray-blue md:flex">
          <a href="#features" className="tracking-widest hover:text-red-400">
            Features
          </a>
          <a href="#download" className="tracking-widest hover:text-red-400">
            Download
          </a>
          <a href="#faq" className="tracking-widest hover:text-red-400">
            FAQ
          </a>

          <a
            href="#"
            className="px-8 py-2 text-white bg-red-400 border-2 border-red-400 rounded-lg shadow-md hover:text-red-400 hover:bg-white transition-all"
          >
            Login
          </a>
        </div>

        <div
          className="md:hidden flex flex-col z-30 justify-between w-6 h-5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 bg-black transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-black transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-black transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </div>
      
      { isOpen && (<div className="fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full max-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-navy-blue">
        <div className="w-full py-3 text-center">
          <a href="#features" className="block hover:text-red-400">
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#download" className="block hover:text-red-400">
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#faq" className="block hover:text-red-400">
            FAQ
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" className="block hover:text-red-400">
            Login
          </a>
        </div>
      </div>)}
    </nav>
  );
}
