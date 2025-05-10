export default function Download() {
  type cardDate = {
    title: string;
    version: string;
    imgSrc: string;
    delayClass?: string;
  };
  const cards: cardDate[] = [
    {
      title: "Add to Chrome",
      version: "Minimum Version 62",
      imgSrc:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg",
    },
    {
      title: "Add to Firefox",
      version: "Minimum Version 55",
      imgSrc:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg",
      delayClass: "md:mt-8",
    },
    {
      title: "Add to Opera",
      version: "Minimum Version 46",
      imgSrc:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg",
      delayClass: "md:mt-16",
    },
  ];
  return (
    <>
      <section>
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-gray-blue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {cards.map(({ title, version, imgSrc, delayClass }, index) => (
            <div key={index} className={`w-full md:w-1/3 ${delayClass ?? ""}`}>
              <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg">
                <div className="flex justify-center">
                  <img src={imgSrc} alt={title} />
                </div>
                <h5 className="pt-6 text-xl font-bold">{title}</h5>
                <p className="text-gray-400">{version}</p>
                <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                  <a
                    href="#"
                    className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-soft-blue hover:text-soft-blue hover:bg-white border-soft-blue"
                  >
                    Add & Install Extension
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
