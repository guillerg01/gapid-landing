"use client";

import Header from "../Componentes/header";
import { useState } from "react";
export default function Convocatorias() {
  return (
    <div>
      <Header></Header>

      <div className=" flex flex-col gap-[7.5rem] ">
        <div className="fixed top-[5rem] w-screen h-[13.38rem] bg-[#005C45] flex justify-center items-center p-5">
          <div className=" relative">
            <input
              className="  placeholder-[#97A4AF] w-[43.75rem] h-[5.375rem] bg-white flex items-center justify-center rounded-lg p-5"
              type="text"
              placeholder="Search for answers"
            ></input>
            <div className=" rounded-lg absolute top-5 w-[3.375rem] h-[3.375rem]   right-5 bg-[#005C45] flex  items-center justify-center">
              <img src="./Union.svg" className=" w-7 "></img>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-[ #00221C1A]  fixed mt-[18.375rem] px-48 w-screen h-[4.125rem] flex items-center ">
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

        <div className=" w-screen h-[114rem] mt-[25rem] px-48 text-black flex flex-row justify-between">
          <div className=" px-4 py-1  flex flex-col gap-0 text-[#8C98A4] font-[Roboto]">
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
          <div className=" flex flex-col gap-0">
            <div className="p-5 border-2 ">
              <div className="font-[Roboto] text-xs font-medium ">
                Getting started
              </div>
              <div className="w-[40.625rem]">
                What methods of payments are supported?
              </div>
              <div className="w-[40.625rem]">
                You can purchase the themes on Bootstrap Themes via any major
                credit/debit card (via Stripe) or with your Paypal account. We
                don't support cryptocurrencies or invoicing at this time.
              </div>
            </div>
            <div>
              <div className="p-5 border-2">
                <div className="font-[Roboto] text-xs font-medium ">
                  Getting started
                </div>
                What methods of payments are supported?
                <div className="w-[40.625rem]">
                  You can purchase the themes on Bootstrap Themes via any major
                  credit/debit card (via Stripe) or with your Paypal account. We
                  don't support cryptocurrencies or invoicing at this time.
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="p-5 border-2">
                <div className=" font-roboto text-sm  text-[#00221C] font-bold ">
                  Getting started
                </div>
                What methods of payments are supported?
                <div className="w-[40.625rem]">
                  You can purchase the themes on Bootstrap Themes via any major
                  credit/debit card (via Stripe) or with your Paypal account. We
                  don't support cryptocurrencies or invoicing at this time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
