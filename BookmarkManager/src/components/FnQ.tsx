import { useState } from "react";

export default function FnQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleAccordion(index: number): void {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const faqs = [
    "What is Bookmark?",
    "How can I request a new browser?",
    "Is there a mobile app?",
    "What about other Chromium browsers?",
  ];

  return (
    <>
      <section>
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-gray-blue">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
      </section>

      <section id="faq-accordion">
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {faqs.map((question, index) => (
              <div key={index} className="py-1 border-b outline-none group">
                <div
                  className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="transition duration-500 ease group-hover:text-red-500">
                    {question}
                  </div>
                  <div
                    className={`transition duration-500 ease ${
                      activeIndex === index ? "-rotate-180 text-red-500" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        d="M1 1l8 8 8-8"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="py-2 text-justify text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, repellat amet doloribus consequuntur eos similique
                    provident tempora voluptates iure quia fuga dicta
                    voluptatibus culpa mollitia recusandae delectus id suscipit
                    labore?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
