export default function Footer() {
  return (
    <footer className="py-16 bg-navy-blue">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-gray-blue">
          <img
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg"
            alt=""
            className="mb-1"
          />

          <a href="#features" className="uppercase hover:text-red-400">
            Features
          </a>
          <a href="#download" className="uppercase hover:text-red-400">
            Download
          </a>
          <a href="#faq" className="uppercase hover:text-red-400">
            FAQ
          </a>
        </div>

        <div className="flex space-x-10">
          <a href="#">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-facebook.svg"
              alt=""
              className="h-6 ficon"
            />
          </a>
          <a href="#">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-twitter.svg"
              alt=""
              className="h-6 ficon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
