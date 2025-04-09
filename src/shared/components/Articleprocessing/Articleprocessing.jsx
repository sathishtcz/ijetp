import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";
import points from "/assets/images/points.png";
import cap from "/assets/images/cap.png";


export default function Articleprocessing() {

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
            {/*Article Processing: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                Article Processing:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { }  follows a streamlined article processing workflow to transform accepted manuscripts into polished, published works that advance educational trends and practices globally. Once a manuscript is accepted following peer review and editorial approval, the processing phase begins. Authors may be required to submit a final version incorporating all revisions, formatted according to IJETP’s template [insert link or placeholder]. The editorial team then conducts copyediting to enhance clarity, grammar, and consistency, ensuring the article adheres to the journal’s style guidelines. Figures, tables, and references are checked for accuracy and proper formatting. Each article is assigned a unique Digital Object Identifier (DOI) for permanent identification and linking. This meticulous process ensures IJETP delivers high-quality, accessible research to its global readership.
                </p>
            </div>


            {/*Manuscript Preparation and Article Processing Workflow*/}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Manuscript Preparation</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Educational Trends and Practices ensures a thorough manuscript preparation and publishing process to deliver high-quality research on educational trends and practices to a global audience.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Submit final revised manuscript with template.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Copyediting improves language and format.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">DOI assigned for permanent article linking.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Article Processing Workflow</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Educational Trends and Practices follows a structured article processing workflow to transform accepted manuscripts into polished publications advancing educational trends and practices worldwide.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Provide revised manuscript per guidelines.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Editorial team edits for clarity and accuracy.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Article published in print and online; check status via email.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">From Acceptance to Publication</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Educational Trends and Practices manages a seamless process from acceptance to publication to share impactful research on educational trends and practices with a global readership.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Submit final revised paper using template.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Copyediting refines text and checks details.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">DOI added for article identification.</p>
                        </div>
                    </div>

                </div>


            </div>


            {/*Finalizing Your Articleand Editorial and Publication Readiness Process*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Finalizing Article</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                    <div className="lg:block hidden rounded-full bg-[#FFE5DA]  border-2 border-[#CF3A2B]  absolute -top-12 left-15 transform -translate-x-1/2 z-10 ">
                        <div className="border-white border-5 rounded-full">
                        <div className="border-2 border-[#CF3A2B] rounded-full  ">
                                <img src={cap} alt="about icon" className="w-[70px] h-[70px]  p-3  " />

                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4  h-full">
                            <div className="flex flex-col gap-3 lg:mt-9 flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Educational Trends and Practices ensures a meticulous process for finalizing your article to present high-quality research on educational trends and practices to a global audience.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Submit revised manuscript per IJETP guidelines.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Copyediting enhances clarity and correctness.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Approve proofs within 48–72 hours.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Readiness Process</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                    <div className="lg:block hidden rounded-full bg-[#FFE5DA]  border-2 border-[#CF3A2B]  absolute -top-12 left-15 transform -translate-x-1/2 z-10 ">
                        <div className="border-white border-5 rounded-full">
                        <div className="border-2 border-[#CF3A2B] rounded-full  ">
                                <img src={cap} alt="about icon" className="w-[70px] h-[70px]  p-3  " />

                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4  h-full">
                            <div className="flex flex-col gap-3 lg:mt-9 flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Educational Trends and Practices follows a publication readiness process to prepare accepted manuscripts for sharing innovative educational trends and practices with readers worldwide.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Editorial copyediting ensures quality and consistency.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Review proofs in 48–72 hours for finalization.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Article appears in print and online; contact us for updates.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
