import Image from 'next/image'
import React from 'react'

function Page2() {
    return (
        <div className="px-20 md:px-48 py-4 pt-20 text-black w-full h-full flex flex-col ">
            <h2 className="text-[#00221C] text-4xl font-medium mx-auto">
                Take the best path forward
            </h2>
            <p className="font-normal text-lg text-[#51596C] py-4 text-center">
                Actionable strategies and business marketing advice help you to grow
                faster.
            </p>

            <div className="flex flex-row justify-between gap-4 my-4">
                <div className="flex flex-row space-x-4 bg-[#0080601A] rounded-md p-1">
                    <svg width="45" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.2 6.5332L24.3833 12.7165C24.85 13.1832 24.85 13.8832 24.3833 14.3499L20.5333 18.1999L13.5333 11.1999L18.2 6.5332ZM2.68334 14.3499L8.86665 20.5332L13.5333 15.8665L6.53332 8.86654L2.68334 12.7165C2.21667 13.1832 2.21667 13.8832 2.68334 14.3499Z" fill="#008060" />
                        <path opacity="0.3" d="M20.5333 18.1997L14.35 24.383C13.8833 24.8497 13.1833 24.8497 12.7166 24.383L8.86664 20.533L15.8666 13.533L20.5333 18.1997ZM12.7166 2.68301L6.5333 8.86634L11.2 13.533L18.2 6.53301L14.35 2.68301C13.8833 2.21634 13.1833 2.21634 12.7166 2.68301Z" fill="#008060" />
                    </svg>

                    <div className="flex flex-col">
                        <h3 className="font-medium text-lg text-[#00221C]">All-in one workspace</h3>
                        <p className="font-normal text-lg text-[#51596C]">Create a business, whether you have got a fresh idea</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4 p-1">
                    <svg width="45" height="40" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M8.83333 23.9171L3 20.5338V13.7671L8.83333 10.3838L14.6667 13.7671V20.5338L8.83333 23.9171ZM25.1667 24.2671V21.5838L22.8333 20.1838L20.5 21.5838V24.2671L22.8333 25.6671L25.1667 24.2671Z" fill="#008060" />
                        <path d="M26.3333 16.4497V6.99967L18.1667 2.33301L10 6.99967V16.4497L18.1667 21.233L26.3333 16.4497Z" fill="#008060" />
                    </svg>


                    <div className="flex flex-col">
                        <h3 className="font-medium text-lg text-[#00221C]">Automation on a whole new level</h3>
                        <p className="font-normal text-lg text-[#51596C]">Use automation to scale campaigns profitably and save time doing it.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4 p-1">
                    <svg width="45" height="40" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M26.0371 10.033C26.0371 12.133 25.3371 14.233 23.7038 15.7497C21.8371 17.6163 19.3871 18.3164 16.9371 17.9664C15.8871 17.8497 14.7204 18.1997 14.0204 19.0164L8.42042 24.6163C7.02042 26.0163 4.80377 25.8997 3.52044 24.4997C2.23711 23.0997 2.47042 20.9997 3.75375 19.7164L9.12043 14.3497C9.93709 13.5331 10.2871 12.4831 10.1704 11.4331C9.82042 9.09973 10.5204 6.53301 12.3871 4.66634C14.0204 3.03301 16.1204 2.33301 18.1038 2.33301C19.1538 2.33301 19.7371 3.73306 18.9204 4.43306L15.5371 7.81643C14.9538 8.39976 14.8371 9.21634 15.1871 9.91634C15.8871 11.3163 16.9371 12.3664 18.3371 13.0664C19.0371 13.4164 19.8538 13.183 20.4371 12.7164L23.8204 9.33301C24.6371 8.39967 26.0371 8.86631 26.0371 10.033Z" fill="#008060" />
                        <path d="M5.27047 22.983C4.8038 22.5164 4.8038 21.8163 5.27047 21.3497L11.6871 14.933C12.1538 14.4663 12.8538 14.4663 13.3205 14.933C13.7871 15.3997 13.7871 16.0997 13.3205 16.5664L6.9038 22.983C6.43713 23.4497 5.62047 23.4497 5.27047 22.983Z" fill="#008060" />
                    </svg>

                    <div className="flex flex-col">
                        <h3 className="font-medium text-lg text-[#00221C]">Solving problems for every team</h3>
                        <p className="font-normal text-lg text-[#51596C]">One tool for your company to share knowledge and ship projects.</p>
                    </div>
                </div>
            </div>
            <Image src="/photo.svg" alt="hero" className="w-full h-auto" width={1000} height={600} />


        </div>
    )
}

export default Page2
