import { useState } from "react";


const Accordion = () => {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [
        { 
          title: "CropSense Agriculture",
          description: "Join CropSense Agriculture to access advanced farming solutions and insights. Sign up today and start optimizing your agricultural practices with our cutting-edge tools."
        },
        { 
          title: "Farm Thumb Services",
          description: "Farm Thumb Services offers comprehensive farm management solutions. From crop planning to yield tracking, we help you streamline your farming operations."
        },
        { 
          title: "Nature's Landscaping",
          description: "Nature's Landscaping provides expert landscaping services to transform your outdoor spaces. Whether it's residential or commercial, our team is here to help."
        },
        { 
          title: "Fresh Start Farm",
          description: "Fresh Start Farm is dedicated to organic and sustainable farming. Explore our range of fresh produce and join us in promoting healthy and eco-friendly food choices."
        },
        { 
          title: "Evergreen Lawn Care",
          description: "Evergreen Lawn Care specializes in maintaining beautiful and healthy lawns. Our services include mowing, fertilizing, and pest control to keep your lawn in top condition."
        },
      ];
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };
    return (
       <div className="bg-[#EFF3ED] px-5 pt-8 pb-12">
         <div className="mx-auto max-w-[400px] bg-[#EFF3ED] px-2 font-sans">
            {dataArr.map((PerAccordion, idx) => (
                <div key={idx} className="border-b border-gray-500/50 py-3">
                    <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between font-medium outline-none text-primary text-xl">
                        <span>{PerAccordion.title}</span>
                        <span className="rounded-full p-2">
                            <svg className="ml-8 size-3 shrink-0 fill-secondary" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                            </svg>
                        </span>
                    </button>
                    <div className={`grid overflow-hidden text-primary transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                    </div>
                </div>
            ))}
        </div>
       </div>
    )
}

export default Accordion