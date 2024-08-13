import Image from "next/image";
import React from "react";

function Page6() {
    return (
        <div className="pr-20 md:px-48 py-10  text-black w-full h-full flex flex-col ">
            <div className="mx-auto space-y-5">
                {" "}
                <h3 className="text-4xl font-medium text-[#00221C] mx-auto">
                    All about Space
                </h3>
                <h4 className="text-lg text-[#51596C] font-normal mx-auto">
                    Explore all Space guides and resources.
                </h4>
            </div>

            <div className="flex flex-row justify-between pt-20 text-white">


            </div>
            <div className="font-normal text-xs justify-center items-center text-center text-[#00221C] mx-auto py-10 flex flex-col">

                <span>Want to read more?</span>
                <a href="#" className="text-base text-[#008060] font-medium">Explore all Space resources</a>
            </div>
        </div>
    );
}

export default Page6;
