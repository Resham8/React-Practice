import { useState } from "react";

export default function Features() {
  const [currentTab, setCurrentTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      img: "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg",
    },
    {
      id: 2,
      title: "Speedy Searching",
      heading: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg",
    },
    {
      id: 3,
      title: "Easy Sharing",
      heading: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      img: "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg",
    },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-gray-blue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      <section className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="absolute [right:60%] [width:2000px] h-[300px] top-[15rem] rounded-tr-full rounded-br-full bg-soft-blue"></div>

        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`flex justify-center text-center cursor-pointer text-gray-600 md:w-1/3 py-5 hover:text-red-400 ${
                currentTab === tab.id ? "border-b-4 border-red-400" : ""
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div className="container mx-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex flex-col py-5 md:flex-row md:space-x-7 ${
                currentTab === tab.id ? "block" : "hidden"
              }`}
            >
              <div className="flex justify-center md:w-1/2">
                <img
                  src={tab.img}
                  alt={tab.heading}
                  className="relative z-10"
                />
              </div>

              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  {tab.heading}
                </h3>
                <p className="max-w-md text-center text-gray-blue md:text-left">
                  {tab.text}
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-soft-blue hover:bg-white hover:text-soft-blue hover:border-soft-blue"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
