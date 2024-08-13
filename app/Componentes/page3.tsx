import React from 'react'

function Page3() {
    return (
        <div className="px-20 md:px-48 py-4 pt-20 text-black w-full h-full flex flex-col ">
            <h2 className="text-[#00221C] text-4xl font-medium w-1/2">
                The powerful and flexible theme for all kinds of businesses
            </h2>

            <div className="flex flex-row py-5">
                <div className='flex flex-col space-y-3'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M45.6 7.2002C44.16 7.2002 43.2 8.1602 43.2 9.6002V19.2002H33.6V9.6002C33.6 8.1602 32.64 7.2002 31.2 7.2002C29.76 7.2002 28.8 8.1602 28.8 9.6002V19.2002H19.2V9.6002C19.2 8.1602 18.24 7.2002 16.8 7.2002C15.36 7.2002 14.4 8.1602 14.4 9.6002V19.2002H4.8V9.6002C4.8 8.1602 3.84 7.2002 2.4 7.2002C0.96 7.2002 0 8.1602 0 9.6002V45.6002C0 47.0402 0.96 48.0002 2.4 48.0002H45.6C47.04 48.0002 48 47.0402 48 45.6002V9.6002C48 8.1602 47.04 7.2002 45.6 7.2002ZM43.2 24.0002V31.2002H33.6V24.0002H43.2ZM28.8 24.0002V31.2002H19.2V24.0002H28.8ZM28.8 36.0002V43.2002H19.2V36.0002H28.8ZM14.4 24.0002V31.2002H4.8V24.0002H14.4ZM4.8 36.0002H14.4V43.2002H4.8V36.0002ZM33.6 43.2002V36.0002H43.2V43.2002H33.6Z" fill="#008060" />
                        <path d="M45.6 0H2.4C0.96 0 0 0.96 0 2.4V9.6C0 11.04 0.96 12 2.4 12H45.6C47.04 12 48 11.04 48 9.6V2.4C48 0.96 47.04 0 45.6 0Z" fill="#008060" />
                    </svg>
                    <h4 className='text-xl font-medium'>Convocatorias (Eventos) </h4>
                    <p className='font-normal text-base'>This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                    <a href="#" className='text-[#008060]'>Link </a>
                </div>
            </div>
        </div>
    )
}

export default Page3
