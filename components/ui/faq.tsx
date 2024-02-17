import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
}
const AccordionItem: React.FC<AccordionItemProps & { isOpen: boolean; toggle: () => void }> = ({
                                                                                                   title,
                                                                                                   content,
                                                                                                   isOpen,
                                                                                                   toggle,
                                                                                               }) => {
    return (
        <div className={`border border-neutral-200 rounded-md ${isOpen ? 'border-b-0' : ''} mt-2`}>
            <h2 className="mb-0">
                <button
                    className="group relative flex w-full items-center rounded-t-md border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                    type="button"
                    onClick={toggle}
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    {title}
                    <span
                        className={`ml-auto h-5 w-5 shrink-0 rotate-${isOpen ? '180' : '0'} fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]`}
                    >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
                </button>
            </h2>
            <div
                className={`border-t border-neutral-200 ${isOpen ? 'border-b border-neutral-200' : 'border-none'} ${isOpen ? 'opacity-100 max-h-[500px] transition-opacity duration-300 ease-in-out' : 'opacity-0 max-h-0 overflow-hidden transition-opacity duration-300 ease-in-out'}`}
                aria-labelledby="flush-headingOne"
            >
                <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">{content}</div>
            </div>
        </div>
    );
};


const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container my-24 mx-auto md:px-6 xl:px-24">
            <section className="mb-32">
                <h2 className="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>

                <div id="accordionFlushExample">
                    <AccordionItem
                        title="very important information"
                        content="btech >> stuy"
                        isOpen={openIndex === 0}
                        toggle={() => handleToggle(0)}
                    />
                    <AccordionItem
                        title="Dean Kamen... Read more below"
                        content="We got him mewing!!!"
                        isOpen={openIndex === 1}
                        toggle={() => handleToggle(1)}
                    />
                    {/* Add more AccordionItem components as needed */}
                </div>
            </section>
        </div>
    );
};

export default Faq;
