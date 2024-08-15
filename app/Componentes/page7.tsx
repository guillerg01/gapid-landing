"use client";
import Image from "next/image";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Page7() {
    return (
        <div className="pr-20 md:px-48 mb-0 py-32  relative overflow-hidden text-black w-full h-screen flex flex-col justify-start  items-center space-y-20">
            <div className="mx-auto ">
                <h3 className="text-4xl font-medium text-[#00221C] mx-auto">
                    Preguntas frecuentes
                </h3>
            </div>

            <div className="w-[50rem] z-20 h-[30rem] rounded-xl bg-white shadow-lg absolute  shadow-[#8C98A420]  flex flex-col  items-center justify-between">
                <div className="w-full h-full p-7 overflow-auto"><Accordion className="text-[#00221C] text-lg font-medium " showDivider={false} selectionMode="multiple">
                    <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="What methods of payments are supported?                    "
                    >
                        <div className="flex flex-col space-y-5">
                            <h5 className="text-lg font-medium text-[#005C45]">Can I cancel at anytime?</h5>
                            <p className="font-normal text-base text-[#51596C]">If you'd like a refund please reach out to us at themes@getbootstrap.com. If you need technical help with the theme before a refund please reach out to the seller first and they can get in touch with us if they're unable to resolve the issue.</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="How do I get a receipt for my purchase?">
                        <div className="flex flex-col space-y-5">
                            <h5 className="text-lg font-medium text-[#005C45]">Can I cancel at anytime?</h5>
                            <p className="font-normal text-base text-[#51596C]">If you'd like a refund please reach out to us at themes@getbootstrap.com. If you need technical help with the theme before a refund please reach out to the seller first and they can get in touch with us if they're unable to resolve the issue.</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Which license do I need?">
                        <div className="flex flex-col space-y-5">
                            <h5 className="text-lg font-medium text-[#005C45]">Can I cancel at anytime?</h5>
                            <p className="font-normal text-base text-[#51596C]">If you'd like a refund please reach out to us at themes@getbootstrap.com. If you need technical help with the theme before a refund please reach out to the seller first and they can get in touch with us if they're unable to resolve the issue.</p>
                        </div>
                    </AccordionItem>
                </Accordion></div>
                <div className=" p-7 bg-[#FDC9941A] h-[100px] w-full flex flex-col justify-center items-center space-y-4">
                    <span className="font-normal text-sm text-[#00221C]"> Still have questions?</span>
                    <a className="text-[#008060] font-medium text-base flex flex-row space-x-2 items-center"><span>Contact our friendly support team </span><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.484835 0.949679C0.631282 0.803232 0.868718 0.803232 1.01517 0.949679L5.51516 5.44968C5.66161 5.59613 5.66161 5.83356 5.51516 5.98001L1.01517 10.48C0.868718 10.6265 0.631282 10.6265 0.484835 10.48C0.338388 10.3336 0.338388 10.0961 0.484835 9.94968L4.71967 5.71484L0.484835 1.48001C0.338388 1.33356 0.338388 1.09613 0.484835 0.949679Z" fill="#008060" />
                    </svg>
                    </a>
                </div>
            </div>

            <svg
                className="absolute -bottom-[1px] left-0 w-ful h-auto"
                width="1520"
                height="294"
                viewBox="0 0 1520 294"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_1_64322)">
                    <path d="M0 293.451H1520V0.726562L0 293.451Z" fill="#005C45" />
                </g>
                <defs>
                    <clipPath id="clip0_1_64322">
                        <rect
                            width="1520"
                            height="292.724"
                            fill="white"
                            transform="translate(0 0.726562)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default Page7;
