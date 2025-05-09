export default function HeroSection() {
  return (
    <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
      <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
        <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
          A Simple Bookmark Manager
        </h1>
        <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
          <a
            href="#"
            className="p-4 text-sm font-semibold text-white bg-indigo-500 rounded shadow-md border-2 border-indigo-500 md:text-base hover:bg-white hover:text-indigo-500"
          >
            Get It On Chrome
          </a>
          <a
            href="#"
            className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
          >
            Get It On Firefox
          </a>
        </div>
      </div>

      <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
        <div className="absolute [left:30%] [width:2000px] h-[300px] top-[13rem] rounded-tl-full rounded-bl-full bg-soft-blue"></div>

        <img
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
          alt=""
          className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
        />
      </div>
    </div>
  );
}
