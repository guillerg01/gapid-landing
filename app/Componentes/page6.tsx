import Image from "next/image";
import React from "react";

function Page6() {
    return (
        <div className="pr-20 md:px-48 py-32 bg-[#FDC9941A]  text-black w-full h-screen flex flex-col ">
            <div className="mx-auto space-y-5">
                {" "}
                <h3 className="text-4xl font-medium text-[#00221C] mx-auto">
                    Nuestros clientes opinan
                </h3>

            </div>

            <div className="flex flex-row justify-between gap-10 pt-20 text-white">
                <div className="p-8 flex flex-col space-y-3  shadow shadow-[#8C98A420] rounded-lg bg-[#FFFFFF]">
                    <p className="font-normal text-xl text-[#00221C]">“ This is a beautiful template with exciting components and endless features. ”</p>
                    <div className="flex flex-row items-center space-x-6">
                        <Image src={'/Image2.png'} alt="image" height={2000} width={2000} className="size-11 rounded-full"></Image>
                        <div className=" flex flex-col space-y-1">
                            <h4 className="font-medium text-lg text-[#00221C]">Andrea</h4>
                            <span className="font-normal text-lg text-[#677788]">Ministro del CITMA</span>
                        </div>
                    </div>
                </div>

                <div className="p-8 flex flex-col space-y-3 shadow shadow-[#8C98A420] rounded-lg bg-[#FFFFFF]">
                    <p className="font-normal text-xl text-[#00221C]">“ This is a beautiful template with exciting components and endless features. ”</p>
                    <div className="flex flex-row items-center space-x-6">
                        <Image src={'/Image2.png'} alt="image" height={2000} width={2000} className="size-11 rounded-full"></Image>
                        <div className=" flex flex-col space-y-1">
                            <h4 className="font-medium text-lg text-[#00221C]">Andrea</h4>
                            <span className="font-normal text-lg text-[#677788]">Ministro del CITMA</span>
                        </div>
                    </div>
                </div>
                <div className="p-8 flex flex-col space-y-3 shadow shadow-[#8C98A420] rounded-lg bg-[#FFFFFF]">
                    <p className="font-normal text-xl text-[#00221C]">“ This is a beautiful template with exciting components and endless features. ”</p>
                    <div className="flex flex-row items-center space-x-6">
                        <Image src={'/Image2.png'} alt="image" height={2000} width={2000} className="size-11 rounded-full"></Image>
                        <div className=" flex flex-col space-y-1">
                            <h4 className="font-medium text-lg text-[#00221C]">Andrea</h4>
                            <span className="font-normal text-lg text-[#677788]">Ministro del CITMA</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="font-normal text-xs space-x-6 justify-center items-center text-center text-[#00221C] mx-auto py-20 flex flex-row">
                <div className="size-4 border border-[#008060] rounded-full flex justify-center items-center"><div className="bg-[#008060] size-1 rounded-full"></div></div>
                <div className="bg-[#BDC5D1] rounded-full size-1 "></div>
                <div className="bg-[#BDC5D1] rounded-full size-1 "></div>
                <div className="bg-[#BDC5D1] rounded-full size-1 "></div>


            </div>
        </div>
    );
}

export default Page6;
