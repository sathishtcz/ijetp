import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";


export default function Plagiarism() {

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
            {/*Plagiarism Policy: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    Plagiarism Policy:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } maintains a strict plagiarism policy to uphold the originality and integrity of research published in advancing educational trends and practices globally. Plagiarism, defined as the unacknowledged use of another’s ideas, words, data, or intellectual property—whether intentional or unintentional—is unacceptable and includes copying text, self-plagiarism (reusing one’s own previously published work without citation), and failing to properly cite sources. All submitted manuscripts are screened using plagiarism detection software to identify similarities with existing publications, online content, or prior submissions. Authors are expected to ensure their work is entirely original, appropriately cite all referenced material, and disclose any overlap with their own past publications.
                </p>
            </div>

            {/*Academic Integrity and Screening Process*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Integrity</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="bg-white p-4 h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Academic integrity is the cornerstone of credible research. At IJETP, we emphasize the importance of ethical scholarship and expect all authors to submit work that reflects originality and proper scholarly practices.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors must ensure that their submissions are free without attribution.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">All sources must be clearly cited using appropriate referencing formats.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Manuscripts  will be subject to immediate review and disciplinary action.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="shadow-md   overflow-hidden flex flex-col w-full  border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Screening Process</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="bg-white p-4  h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">All submitted manuscripts undergo a rigorous plagiarism screening process. This ensures that published research maintains the journal’s quality standards and reflects ethical academic conduct.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Every manuscript is checked using reliable plagiarism detection tools.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors are encouraged to self-check their work with tools before submission.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Submissions must include an author declaration confirming originality.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="shadow-md   overflow-hidden flex flex-col w-full mt-8 border-2 border-[#CF3A2B]">
            <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Actions</h2>
                        </div>
                    </div>
                <div className="relative flex-grow">
                    <div className="bg-white   p-4 h-full">
                        <div className="flex flex-col gap-3  flex-grow">
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP follows a strict protocol for handling instances of plagiarism, whether minor or major. Depending on the severity, appropriate actions will be taken to protect the integrity of the journal and its contributors.</p>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">In the case of significant or deliberate plagiarism, the submission will be rejected without review.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Published articles found to be plagiarized will be formally retracted from the journal and database listings.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP adheres to international publishing ethics guidelines, such as those by COPE (Committee on Publication Ethics).</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
