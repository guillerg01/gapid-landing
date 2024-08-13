"use client";

import Header from "../Componentes/header";
import { useState } from "react";
export default function Convocatorias() {
  return (
    <div className="bg-white">
      <Header></Header>

      <div className=" flex flex-col gap-[7.5rem] ">
        <div className="fixed top-[5rem] w-screen h-[13.38rem] bg-[#005C45] flex justify-center items-center p-5">
          <div className=" absolute  w-screen   top-0 left-24">
            <img src="./shape-1-soft-light.png "></img>
          </div>
          <div className=" relative ">
            <input
              className="  placeholder-[#97A4AF] w-[43.75rem] h-[5.375rem] bg-white flex items-center justify-center rounded-lg p-5"
              type="text"
              placeholder="Search for answers"
            ></input>
            <div className=" rounded-lg absolute top-5 w-[3.375rem] h-[3.375rem]   right-5 bg-[#005C45] flex  items-center justify-center">
              <img src="./Union.svg" className=" w-7 "></img>
            </div>
          </div>
          <div className=" absolute  w-screen  -right-[90rem]">
            <img src="./Vector.svg "></img>
          </div>
        </div>
        <div className="border-b-2 border-[ #00221C1A] bg-white  fixed mt-[18.375rem] px-48 w-screen h-[4.125rem] flex items-center z-20">
          <div className="flex flex-row gap-2 ">
            <div className="cursor-pointer  hover:text-[#008060] ">
              Convocatorias
            </div>
            <div> /</div>
            <div className="cursor-pointer hover:text-[#008060] ">
              Programas Sectoriales
            </div>
          </div>
        </div>

        <div className="  py-1  flex flex-col gap-0 text-[#8C98A4] font-[Roboto] mt-[25rem] px-48 fixed">
          <div className="border-l-2 border-[#00221C1A]  p-3 hover:text-[#008060] hover:border-[#008060]">
            Programas Nacionales (6)
          </div>
          <div className="border-l-2 border-[#00221C1A] hover:text-[#008060] hover:border-[#008060]  p-3">
            Programas Nacionales (6)
          </div>
          <div className="border-l-2 border-[#00221C1A]  p-3 hover:text-[#008060] hover:border-[#008060]">
            Programas Nacionales (6)
          </div>
          <div className="border-l-2 border-[#00221C1A] p-3 hover:border-[#008060] hover:text-[#008060]">
            Programas Nacionales (6)
          </div>
        </div>

        <div className=" flex flex-col mt-[25rem] ml-[45rem] pr-48">
          <div className="flex flex-row gap-1">
            <div className="py-5 ">
              <img src="./cod012.svg" className="w-20"></img>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="p-5   flex flex-col gap-3">
                <div className="font-[Roboto]   text-sm   text-[#00221C/500] font-medium ">
                  Getting started
                </div>
                <div className="flex text-xl font-roboto text-[#00221C/500] font-bold">
                  What methods of payments are supported?
                </div>
                <div className=" text-[#51596C] font-roboto flex    ">
                  You can purchase the themes on Bootstrap Themes via any major
                  credit/debit card (via Stripe) or with your Paypal account. We
                  don't support cryptocurrencies or invoicing at this time.
                </div>
              </div>
              <div className="border-b-2  flex flex-row">
                <div className="px-5 pb-5 font-roboto text-[#008060]  ">
                  Read more{" "}
                </div>
                <div>
                  <img src="./Path (Stroke).svg" className="w-2 pt-1"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="py-5 ">
              <img src="./cod012.svg" className="w-20"></img>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="p-5   flex flex-col gap-3">
                <div className="font-[Roboto]   text-sm   text-[#00221C/500] font-medium ">
                  Getting started
                </div>
                <div className="flex text-xl font-roboto text-[#00221C/500] font-bold">
                  What methods of payments are supported?
                </div>
                <div className=" text-[#51596C] font-roboto flex    ">
                  You can purchase the themes on Bootstrap Themes via any major
                  credit/debit card (via Stripe) or with your Paypal account. We
                  don't support cryptocurrencies or invoicing at this time.
                </div>
              </div>
              <div className="border-b-2  flex flex-row">
                <div className="px-5 pb-5 font-roboto text-[#008060]  ">
                  Read more{" "}
                </div>
                <div>
                  <img src="./Path (Stroke).svg" className="w-2 pt-1"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="py-5 ">
              <img src="./cod012.svg" className="w-20"></img>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="p-5   flex flex-col gap-3">
                <div className="font-[Roboto]   text-sm   text-[#00221C/500] font-medium ">
                  Getting started
                </div>
                <div className="flex text-xl font-roboto text-[#00221C/500] font-bold">
                  What methods of payments are supported?
                </div>
                <div className=" text-[#51596C] font-roboto flex    ">
                  You can purchase the themes on Bootstrap Themes via any major
                  credit/debit card (via Stripe) or with your Paypal account. We
                  don't support cryptocurrencies or invoicing at this time.
                </div>
              </div>
              <div className="border-b-2  flex flex-row">
                <div className="px-5 pb-5 font-roboto text-[#008060]  ">
                  Read more{" "}
                </div>
                <div>
                  <img src="./Path (Stroke).svg" className="w-2 pt-1"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between  mt-10 ">
            <div className="flex flex-row gap-5">
              <div className=" flex  items-center justify-center borderb-2 ">
                <img src="./tio-chevron_left.svg"></img>
              </div>
              <div className="borderb-2  text-[#677788]">1</div>
              <div className="borderb-2  text-[#677788]">2</div>
              <div className="borderb-2  text-[#677788]">3</div>
              <div className=" flex  items-center justify-center borderb-2 ">
                <img src="./tio-chevron_right.svg"></img>
              </div>
            </div>
            <div className=" flex text-sm text-[#8C98A4]"> Showing 3 of 3</div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="flex flex-row  gap-28">
            <img src="./sending.png"></img>{" "}
            <div className="flex flex-col">
              <div className=" text-2xl font-roboto text-[#00221C] flex max-w-64 py-5">
                Can't find what you are looking for?
              </div>
              <div className=" flex flex-row gap-2">
                <div className=" text-[#008060] font-roboto items-center text-sm font-medium">
                  Contact us
                </div>
                <div className="flex items-center justify-center">
                  <img src="./Path (Stroke) (1).svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
