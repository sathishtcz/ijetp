import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";

export default function Correction() {

     const [clipPath, setClipPath] = useState("polygon(23% 0, 78% 0, 73% 95%, 28% 95%)");
        
            useEffect(() => {
                const handleResize = () => {
                    const width = window.innerWidth;
                    if (width <= 640) {
                        setClipPath("polygon(10% 0, 90% 0, 85% 95%, 15% 95%)"); // Small screens
                    } else if (width <= 768) {
                        setClipPath("polygon(15% 0, 85% 0, 80% 95%, 20% 95%)"); // Medium screens
                    } else if (width <= 1024) {
                        setClipPath("polygon(20% 0, 80% 0, 75% 95%, 25% 95%)"); // Tablets
                    } else {
                        setClipPath("polygon(23% 0, 78% 0, 73% 95%, 28% 95%)"); // Large screens
                    }
                };
        
                // Set initial clip-path
                handleResize();
        
                // Add event listener for window resize
                window.addEventListener("resize", handleResize);
        
                // Cleanup event listener on component unmount
                return () => window.removeEventListener("resize", handleResize);
            }, []);

    return (
        <>
        {/*correction Policy: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                Journal Correction Policy:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } is committed to maintaining the accuracy and integrity of its published research advancing educational trends and practices globally, and thus implements a clear correction policy to address errors or updates post-publication. Corrections may be necessary due to unintentional mistakes identified by authors, readers, or editors after an article is published. Minor errors that do not affect the article’s scientific validity or conclusions—such as formatting issues or small typos—may be corrected with an editorial note appended to the online version. Authors are encouraged to promptly report errors to [insert email], providing a clear explanation and supporting evidence.
                </p>
            </div>

            {/*Post-Publication and Malpractice Guidelines*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className=" shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Post-Publication</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="bg-white  p-4 h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP upholds post-publication correction guidelines to ensure the accuracy and reliability of its research advancing educational trends and practices globally. Errors identified after publication—such as typographical mistakes, data inaccuracies.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Covers errors found after publication.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Minor fixes noted online; major ones get a correction notice.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Changes made in print and online versions.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div className=" shadow-md   overflow-hidden flex flex-col w-full  border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Article Corrections</h2>
                        </div>
                    </div>

                    <div className="relative flex-grow">
                        <div className="bg-white   p-4  h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">This policy addresses unintentional errors discovered post-publication, including typos, factual inaccuracies, or omitted references, brought to attention by authors, readers, or the editorial team.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Handles typos, data errors, and more post-publication.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Minor errors get an online note; major ones a separate notice.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors email details of errors for review.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className=" shadow-md   overflow-hidden flex flex-col w-full mt-8 border-2 border-[#CF3A2B]">
            <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Amendment Process</h2>
                        </div>
                    </div>
                <div className="relative flex-grow">
                    <div className="bg-white p-4 h-full">
                        <div className="flex flex-col gap-3  flex-grow">
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify"> Errors detected after publication—whether typographical, factual, or citation-related—can be flagged by authors, readers, or editors for correction. Minor inaccuracies, such as small typos or layout errors that do not affect the study’s meaning, are amended with an editorial note attached to the online article.</p>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Addresses post-publication errors of all kinds.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Minor fixes noted online; significant ones in a correction notice.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors submit error reports via email.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
