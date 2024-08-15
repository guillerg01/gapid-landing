import Image from "next/image";
import React from "react";

function Page5() {
    return (
        <div className="pr-20 md:px-48 py-10  text-black w-full h-screen flex flex-col ">
            <div className="mx-auto space-y-5">
                {" "}
                <h3 className="text-4xl font-medium text-[#00221C] mx-auto">
                    All about Space
                </h3>
                <h4 className="text-lg text-[#51596C] font-normal mx-auto">
                    Explore all Space guides and resources.
                </h4>
            </div>

            <div className="flex flex-row justify-between pt-20 gap-5 text-white">
                <div className="h-96  rounded-md bg-[#005C45] flex flex-col space-y-7 relative items-start justify-start px-12 pt-2">
                    <svg className="absolute bottom-0 left-0" width="173" height="111" viewBox="0 0 173 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M172.085 36.0673C170.619 46.1909 170.158 53.8608 165.387 60.3666C164.802 61.1665 164.086 62.9093 164.336 63.1049C167.728 65.7649 163.796 67.3 163.713 68.8903C163.228 78.3219 150.171 82.1434 153.059 92.8375C153.356 93.9423 151.414 96.1356 149.995 97.0798C146.295 99.547 140.54 99.4539 139.948 105.753C139.878 106.503 136.084 107.043 133.97 107.445C132.393 107.744 130.637 107.348 129.144 107.819C126.27 108.725 122.972 111.587 120.839 110.858C115.468 109.105 110.488 106.366 106.163 102.787C101.653 98.6486 97.7755 93.8953 94.6485 88.6734C91.9454 84.3987 85.5648 82.9338 84.326 84.0871C78.69 89.36 74.1329 83.99 69.218 84.0871C65.851 84.1819 62.548 85.0114 59.5493 86.5152C54.0123 89.3357 49.3644 86.6244 45.4804 84.0952C33.8986 76.5616 21.8295 69.5054 14.9795 56.6098C12.6356 52.203 7.98221 49.0047 4.6391 45.0429C2.96861 43.2469 1.76096 41.0851 1.11706 38.7381C0.329797 34.7386 -2.20266 29.8637 4.5923 27.8363C5.67272 27.5139 6.15306 25.3435 6.96923 24.0593C10.7252 18.1808 13.6885 17.1988 20.0939 20.5036C24.1541 22.5998 26.4402 22.6713 28.3974 17.8462C29.2521 15.7392 32.5264 14.3391 34.9776 13.1439C38.6166 11.3553 42.3382 10.3692 43.5742 5.49292C44.923 0.148543 50.3416 -1.70621 54.8643 1.76993C60.7453 6.29148 65.9038 11.7249 71.3114 16.8278C74.7523 20.0719 77.8174 23.7491 81.5362 26.6317C84.2545 28.7387 87.2136 28.2005 88.3436 24.3385C89.6291 19.9465 92.3267 18.5045 96.1887 21.1335C98.6482 22.8062 99.485 22.8804 101.665 20.7437C104.831 17.6412 111.807 19.2397 116.48 22.3489C120.749 25.158 125.393 27.3767 130.28 28.9424C132.122 29.5372 135.043 27.9091 137.097 26.6883C142.442 23.7519 147.545 20.4113 152.36 16.697C156.937 12.9025 161.361 16.0508 162.861 18.2023C167.077 24.2441 169.748 31.3151 172.085 36.0673Z" fill="white" fillOpacity="0.05" />
                    </svg>
                    <svg className="absolute bottom-0 right-0" width="118" height="114" viewBox="0 0 118 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M117.919 59.6015C117.919 73.2983 118.029 86.9978 117.88 100.695C117.785 109.401 115.331 112.094 106.582 112.619C75.9343 114.582 45.1843 114.452 14.555 112.229C11.527 111.998 7.15993 112.457 7.14754 108.137C7.13653 104.289 11.1802 104.577 14.0719 104.295C18.3991 103.874 22.8267 103.998 27.0548 103.146C33.4768 101.851 39.7804 99.9757 46.0868 98.183C46.9126 97.9496 47.437 96.7383 48.1017 95.9802C47.0999 95.6453 46.0509 95.4656 44.9926 95.4474C31.6669 97.3493 18.5477 96.0962 5.38721 93.6938C0.831549 92.8737 -0.363108 91.2186 0.490219 87.0329C0.927724 84.3937 1.07675 81.7162 0.934774 79.046C0.854947 74.8468 1.21004 74.5218 5.55513 76.0325C19.0432 80.72 32.5987 79.7002 46.1804 76.5721C46.948 76.2659 47.6643 75.8485 48.3054 75.3338C47.6431 74.7884 46.8916 74.3566 46.0826 74.0564C42.0335 73.328 37.9788 72.5591 33.8897 72.1436C24.8059 71.2223 17.5457 66.6131 10.6531 61.3119C6.14007 57.8384 6.07813 56.7256 9.00146 51.7063C10.7054 48.7846 12.3845 45.8493 14.0733 42.9195C17.404 37.1381 17.5554 37.1381 21.9321 42.0157C29.5236 50.5056 39.295 56.8495 50.2323 60.3892C52.8289 61.2522 55.5408 61.7362 58.2811 61.8258C59.8983 61.8703 62.3316 61.1837 62.9606 60.056C63.5745 58.9526 62.7927 56.5907 61.8857 55.2688C57.427 48.9464 51.2681 43.9584 44.0925 40.8584C37.8866 38.0391 31.316 35.9875 24.861 33.7226C19.5896 31.8719 18.8326 30.546 22.2115 26.1418C25.4702 21.5315 29.341 17.3672 33.7218 13.7588C36.1758 11.9067 40.6186 11.6005 43.9562 12.0497C53.892 13.4054 61.6614 19.0762 68.5926 25.7991C72.0004 29.104 74.9361 32.8728 78.1609 36.3638C78.8423 36.8979 79.6036 37.3261 80.418 37.6331C80.5557 36.6336 81.0856 35.4938 80.7731 34.6547C78.3301 28.0977 73.5777 23.2052 68.0737 19.0937C64.4553 16.3959 60.3428 14.3213 56.4506 11.9715C52.4041 9.5286 51.9844 7.61719 55.9757 5.84473C61.8134 3.34708 67.8825 1.40516 74.0993 0.0457661C75.6435 -0.313044 78.5861 1.50663 79.562 3.10239C81.8552 7.2079 83.8873 11.4484 85.6467 15.7997C86.4725 17.6436 86.9928 19.6292 87.886 21.4395C88.0897 21.7986 88.3782 22.1046 88.7273 22.332C89.0764 22.5594 89.476 22.7016 89.8927 22.7466C90.4336 22.6899 91.269 21.5393 91.2608 20.8837C91.1947 17.0865 91.6585 13.06 90.5341 9.55288C88.8825 4.396 90.5547 3.03765 95.7036 2.87578C101.193 2.75123 106.68 3.17473 112.082 4.13971C113.762 4.42702 115.823 6.77817 116.335 8.56278C117.351 12.2445 117.877 16.0393 117.901 19.8532C118.075 33.1008 117.967 46.3525 117.967 59.6015H117.919Z" fill="white" fillOpacity="0.05" />
                    </svg>

                    <div className=" p-2 rounded-lg text-[9px] font-medium bg-[#F9FAFC1A]">Data insights</div>
                    <span className="font-medium text-3xl">State of product analytics report</span>
                    <a href="#" className="text-base font-medium flex items-center space-x-4"><span>Learn more </span><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.484835 0.734835C0.631282 0.588388 0.868718 0.588388 1.01517 0.734835L5.51516 5.23484C5.66161 5.38128 5.66161 5.61872 5.51516 5.76516L1.01517 10.2652C0.868718 10.4116 0.631282 10.4116 0.484835 10.2652C0.338388 10.1187 0.338388 9.88128 0.484835 9.73483L4.71967 5.5L0.484835 1.26517C0.338388 1.11872 0.338388 0.881282 0.484835 0.734835Z" fill="white" />
                    </svg>
                    </a>
                </div>
                <div className="h-96  rounded-md bg-[#005C45] flex flex-col space-y-7 relative items-start justify-start px-12 pt-2">
                    <svg className="bottom-0 left-7 absolute" width="360" height="116" viewBox="0 0 360 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M359.919 60.8132C359.919 74.7885 360.029 88.7665 359.88 102.742C359.785 111.625 357.331 114.373 348.582 114.909C317.934 116.912 287.184 116.779 256.555 114.511C253.527 114.276 249.16 114.743 249.148 110.335C249.137 106.41 253.18 106.703 256.072 106.415C260.399 105.986 264.827 106.112 269.055 105.243C275.477 103.921 281.78 102.008 288.087 100.179C288.913 99.941 289.437 98.705 290.102 97.9315C289.1 97.5899 288.051 97.4064 286.993 97.3879C273.667 99.3285 260.548 98.0499 247.387 95.5987C242.832 94.7618 241.637 93.0731 242.49 88.8023C242.928 86.1094 243.077 83.3775 242.935 80.653C242.855 76.3685 243.21 76.0368 247.555 77.5783C261.043 82.3611 274.599 81.3206 288.18 78.1289C288.948 77.8165 289.664 77.3906 290.305 76.8654C289.643 76.3089 288.892 75.8683 288.083 75.562C284.033 74.8188 279.979 74.0343 275.89 73.6104C266.806 72.6703 259.546 67.9674 252.653 62.5584C248.14 59.0143 248.078 57.8789 251.001 52.7575C252.705 49.7764 254.384 46.7815 256.073 43.7921C259.404 37.8931 259.555 37.8931 263.932 42.8699C271.524 51.5324 281.295 58.0053 292.232 61.617C294.829 62.4975 297.541 62.9913 300.281 63.0828C301.898 63.1282 304.332 62.4276 304.961 61.277C305.574 60.1512 304.793 57.7412 303.886 56.3924C299.427 49.9415 293.268 44.8521 286.092 41.689C279.887 38.8125 273.316 36.7191 266.861 34.4082C261.59 32.5199 260.833 31.167 264.212 26.6732C267.47 21.9692 271.341 17.7203 275.722 14.0385C278.176 12.1488 282.619 11.8364 285.956 12.2947C295.892 13.6779 303.661 19.464 310.593 26.3237C314 29.6957 316.936 33.5411 320.161 37.1031C320.842 37.6481 321.604 38.0849 322.418 38.3982C322.556 37.3784 323.086 36.2154 322.773 35.3593C320.33 28.6689 315.578 23.677 310.074 19.4819C306.455 16.7292 302.343 14.6124 298.451 12.2149C294.404 9.72232 293.984 7.77206 297.976 5.96355C303.813 3.41513 309.882 1.43373 316.099 0.0466965C317.644 -0.319408 320.586 1.53727 321.562 3.16547C323.855 7.35444 325.887 11.6812 327.647 16.1209C328.473 18.0023 328.993 20.0283 329.886 21.8753C330.09 22.2417 330.378 22.554 330.727 22.7861C331.076 23.0181 331.476 23.1631 331.893 23.209C332.434 23.1512 333.269 21.9772 333.261 21.3083C333.195 17.4339 333.659 13.3256 332.534 9.7471C330.882 4.48537 332.555 3.0994 337.704 2.93424C343.193 2.80717 348.68 3.23927 354.082 4.22387C355.762 4.51703 357.823 6.91598 358.335 8.73687C359.351 12.4934 359.877 16.3654 359.901 20.2568C360.075 33.7738 359.967 47.2949 359.967 60.8132H359.919Z" fill="white" fillOpacity="0.05" />
                        <path d="M105.523 1.68945C108.01 2.47845 111.077 3.36345 114.08 4.42945C116.98 5.45845 118.549 7.35645 118.189 10.7295C117.853 13.8725 117.522 16.7115 113.77 17.6855C108.47 19.0625 103.278 20.9415 97.9187 21.9855C93.7127 22.8045 89.8307 21.7765 88.5827 16.7415C87.1097 10.7945 89.2517 5.65645 94.3907 3.94145C97.6767 2.83745 101.226 2.52345 105.523 1.68945Z" fill="white" fillOpacity="0.05" />
                        <path d="M117.189 74.0341C111.93 74.4041 107.159 73.6181 104.031 68.6901C101.408 64.5581 102.077 60.2801 106.614 58.7711C111.066 57.2723 115.77 56.6608 120.458 56.9711C126.339 57.4381 129.108 61.3041 128.727 66.3481C128.242 72.7721 127.343 73.5061 119.453 73.9221C118.7 73.9631 117.944 74.0001 117.189 74.0341Z" fill="white" fillOpacity="0.05" />
                        <path d="M123.918 26.4531C131.082 24.9141 135.158 30.2231 138.581 36.4301C139.788 38.6201 139.697 40.4231 137.104 42.0601C131.099 45.8521 120.047 44.6601 115.77 38.8681C114.095 36.5134 113.322 33.6351 113.592 30.7581C114.125 27.2221 117.085 26.2731 123.918 26.4531Z" fill="white" fillOpacity="0.05" />
                        <path d="M62.6256 52.984C58.8996 52.666 55.1476 52.523 51.4536 51.984C47.2246 51.366 43.8456 47.084 44.5266 43.621C45.1616 40.394 50.1266 36.587 53.6136 37.31C58.9411 38.3427 64.1705 39.8291 69.2446 41.753C70.4516 42.229 71.0446 45.603 70.9556 47.6C70.8717 48.5153 70.6017 49.4037 70.1622 50.2109C69.7227 51.0181 69.1229 51.7269 68.3996 52.294C66.8836 53.314 64.5996 53.194 62.6526 53.572L62.6256 52.984Z" fill="white" fillOpacity="0.05" />
                        <path d="M68.7826 0C71.8676 0.758 74.5006 0.856 76.4236 2.075C77.1188 2.67032 77.6606 3.42406 78.0035 4.27266C78.3463 5.12126 78.4801 6.03986 78.3936 6.951C76.9156 13.639 63.4936 19.366 57.7536 15.597C55.5736 14.166 53.9636 11.175 53.2346 8.575C52.9556 7.581 55.6116 5.166 57.3726 4.319C61.0906 2.533 65.0996 1.353 68.7826 0Z" fill="white" fillOpacity="0.05" />
                        <path d="M58.2597 76.992C57.8067 77.05 56.8077 77.184 55.8077 77.302C52.8867 77.649 48.6817 78.945 48.2477 75.12C47.9177 72.21 50.4857 68.814 52.2227 65.907C52.8677 64.827 54.9347 64.694 56.1487 63.838C62.0097 59.708 64.6757 59.718 69.1157 65.283C70.7517 67.333 72.2367 71.174 71.3657 73.101C70.4247 75.181 66.7507 76.277 64.0657 77.217C62.5247 77.755 60.5777 77.127 58.2597 76.992Z" fill="white" fillOpacity="0.05" />
                        <path d="M8.66363 65.9999C4.70763 65.9719 0.618633 66.4599 0.0296331 61.0619C-0.382367 57.2849 3.52963 51.8049 7.08663 51.0479C8.78663 50.6859 10.4696 50.2889 12.1726 49.9669C16.8326 49.0839 21.7726 51.3499 22.7436 54.7909C23.6656 58.0419 19.1636 64.3469 15.1656 65.1799C12.9736 65.6359 10.7116 65.7509 8.66363 65.9999Z" fill="white" fillOpacity="0.05" />
                        <path d="M96.6746 35.5713C98.9526 36.4163 101.504 36.8603 103.454 38.1873C107.8 41.1463 107.354 44.8623 102.669 47.2753C101.304 47.8219 100.01 48.5303 98.8136 49.3853C95.9136 51.9503 92.7696 53.4223 89.3556 50.8523C86.7556 48.8943 83.9846 46.1943 85.8186 42.5993C87.6126 39.0813 90.1376 35.7153 94.9606 35.9933C95.4606 36.0223 95.9606 36.0933 96.4606 36.1383L96.6746 35.5713Z" fill="white" fillOpacity="0.05" />
                        <path d="M17.0666 29.4843C22.8356 29.3583 27.2216 31.7373 27.3816 35.0763C27.5816 39.3583 21.5926 45.1993 16.8376 45.3513C13.8156 45.4513 6.18864 38.9193 6.13764 36.1923C6.06964 32.5713 10.8796 29.6193 17.0666 29.4843Z" fill="white" fillOpacity="0.05" />
                        <path d="M34.6556 26.4628C28.9846 26.5078 25.9916 23.6738 26.0446 18.3098C26.0926 13.5148 29.1396 10.7098 34.3506 10.6568C39.7556 10.6048 45.8796 14.2758 45.6586 17.4358C45.4376 20.5958 38.3246 26.4328 34.6556 26.4628Z" fill="white" fillOpacity="0.05" />
                        <path d="M80.8386 27.4509C80.7306 32.8709 77.8306 36.6279 73.8636 36.4869C70.1706 36.3559 62.9636 31.2689 62.9186 28.7579C62.8536 25.4329 70.2506 18.2579 73.5546 18.4369C77.3916 18.6489 80.9266 23.0229 80.8386 27.4509Z" fill="white" fillOpacity="0.05" />
                        <path d="M93.8996 79.2346C92.3996 79.2346 90.7826 79.6666 89.5936 79.1346C87.7046 78.2896 85.4166 77.1256 84.6316 75.4656C84.1316 74.4156 85.7416 71.9336 86.9536 70.5876C91.2656 65.7966 94.8536 65.9386 96.4766 70.7776C96.5751 71.2005 96.5762 71.6401 96.4801 72.0634C96.384 72.4868 96.193 72.8828 95.9216 73.2216C93.6526 75.4756 93.1936 76.4646 93.8996 79.2346Z" fill="white" fillOpacity="0.05" />
                    </svg>

                    <div className=" p-2 rounded-lg text-[9px] font-medium bg-[#F9FAFC1A]">Data insights</div>
                    <span className="font-medium text-3xl">State of product analytics report</span>
                    <a href="#" className="text-base font-medium flex items-center space-x-4"><span>Learn more </span><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.484835 0.734835C0.631282 0.588388 0.868718 0.588388 1.01517 0.734835L5.51516 5.23484C5.66161 5.38128 5.66161 5.61872 5.51516 5.76516L1.01517 10.2652C0.868718 10.4116 0.631282 10.4116 0.484835 10.2652C0.338388 10.1187 0.338388 9.88128 0.484835 9.73483L4.71967 5.5L0.484835 1.26517C0.338388 1.11872 0.338388 0.881282 0.484835 0.734835Z" fill="white" />
                    </svg>
                    </a>
                </div>
                <div className="h-96 rounded-md bg-[#005C45] flex flex-col space-y-7 relative items-start justify-start p-12">
                    <svg className="absolute bottom-0 left-0" width="169" height="98" viewBox="0 0 169 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.0642 17.7372C63.9277 11.0098 69.8114 5.21552 76.5358 0.661899C78.6687 -0.781749 83.2829 0.433157 86.3369 1.57081C92.4068 3.8355 98.0708 7.18331 104.144 9.43285C105.925 10.0933 108.588 8.75117 110.73 7.99527C118.541 5.24128 127.75 -1.73459 133.762 0.39983C144.587 4.24148 152.192 14.2516 151.28 27.7731C150.88 33.681 150.583 39.6222 150.742 45.5347C150.85 47.9462 151.702 50.2653 153.179 52.1742C167.543 69.7146 172.994 89.4394 165.813 111.155C163.897 116.954 157.297 121.175 152.952 126.212C150.756 128.76 148.015 131.211 146.872 134.224C143.189 143.919 144.328 156.273 131.019 160.296C129.511 160.751 128.833 163.955 127.603 166.188C127.289 164.673 127.045 163.487 126.8 162.305C117.267 183.664 113.739 186.433 83.8828 180.506C64.7094 176.699 46.1874 168.879 27.929 161.484C17.4477 157.242 12.5866 143.322 16.4979 132.537C19.1913 125.114 18.3794 118.661 12.6093 113.992C-4.9856 99.7525 -1.94833 69.2026 8.24052 55.2691C15.1194 45.8634 16.3465 36.1275 19.7034 26.3991C24.2009 13.3715 38.4405 8.26188 50.5759 15.465C52.3166 16.4211 54.1571 17.1831 56.0642 17.7372Z" fill="white" fillOpacity="0.05" />
                    </svg>
                    <svg className="absolute bottom-5 right-0" width="125" height="87" viewBox="0 0 125 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M188.171 1.07636C193.604 13.6284 188.111 18.7849 179.569 24.7913C172.808 29.5448 167.571 37.8098 164.07 45.6007C154.734 66.3753 139.227 76.8216 116.904 74.4903C102.673 73.0042 91.0258 78.3834 78.6556 83.1431C65.593 88.1678 52.8411 89.8705 42.4159 77.0231C34.2615 66.9736 22.9623 69.2701 12.2841 70.7335C2.28613 72.0968 -1.69336 68.0249 0.656161 57.9588C3.86006 44.2328 14.2898 37.0539 25.9041 31.9035C50.899 20.8118 76.2394 10.4775 101.471 -0.0855284C117.26 -6.69631 132.602 -4.25135 147.849 2.1731C157.225 6.12231 166.553 6.98274 176.262 1.92316C179.747 0.108372 184.763 1.24299 188.171 1.07636Z" fill="white" fillOpacity="0.05" />
                    </svg>


                    <div className=" p-2 rounded-lg text-[9px] font-medium bg-[#F9FAFC1A]">Data insights</div>
                    <span className="font-medium text-3xl">State of product analytics report</span>
                    <a href="#" className="text-base font-medium flex items-center space-x-4"><span>Learn more </span><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.484835 0.734835C0.631282 0.588388 0.868718 0.588388 1.01517 0.734835L5.51516 5.23484C5.66161 5.38128 5.66161 5.61872 5.51516 5.76516L1.01517 10.2652C0.868718 10.4116 0.631282 10.4116 0.484835 10.2652C0.338388 10.1187 0.338388 9.88128 0.484835 9.73483L4.71967 5.5L0.484835 1.26517C0.338388 1.11872 0.338388 0.881282 0.484835 0.734835Z" fill="white" />
                    </svg>
                    </a>
                </div>

            </div>
            <div className="font-normal text-xs justify-center items-center text-center text-[#00221C] mx-auto py-10 flex flex-col">

                <span>Want to read more?</span>
                <a href="#" className="text-base text-[#008060] font-medium">Explore all Space resources</a>
            </div>
        </div>
    );
}

export default Page5;
