import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";
import points from "/assets/images/points.png";
import cap from "/assets/images/cap.png";

export default function Authorguideline() {
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
            {/*Author Guidelines */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    Author Guidelines:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { }  warmly invites submissions of original research articles, comprehensive review papers, and insightful practical notes that contribute meaningfully to the global advancement of educational trends and practices. Our journal is committed to fostering a vibrant academic and professional community dedicated to exploring innovative approaches, effective strategies, and transformative solutions in education. We welcome contributions that reflect diverse perspectives, address pressing challenges, and offer actionable insights for educators, researchers, policymakers, and practitioners worldwide. To ensure a seamless submission experience and a rigorous yet efficient peer review process, authors are kindly requested to adhere to the following detailed guidelines, which are designed to uphold the journal’s standards of quality, originality, and scholarly integrity.
                </p>
            </div>


            {/*Research and Technical Submissions*/}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Research and Technical Submissions</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP invites original research articles, review papers, and practical notes that advance educational trends and practices globally, with a focus on technical and research-driven insights. We aim to publish rigorous studies and innovative solutions for educators, researchers, and policymakers.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Submit original, unpublished research or technical papers.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Focus on areas like tech, equity, or policy research.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Ensure a smooth review to  submit your research or technical work.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Scholarly and Technical Papers</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP welcomes original research articles, review papers, and practical notes that enhance educational trends and practices worldwide, emphasizing scholarly and technical contributions. We seek to publish in-depth studies and innovative ideas for educators, researchers, and policymakers.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Ensure your paper is new and not published elsewhere.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Ask for help via email if needed.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Focus on research areas like tech, sustainability, or teacher growth.</p>
                        </div>
                    </div>

                </div>


            </div>


            {/*Manuscript Eligibility and Submission Process*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full  border-2 border-[#CF3A2B]">
                    <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Manuscript Eligibility</h2>
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
                        <div className="bg-white  p-4 h-full">
                            <div className="flex flex-col gap-3 lg:mt-9 flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It accepts high-quality, original manuscripts that contribute to the advancement of knowledge in the field of education. Submissions must reflect sound research methodology, theoretical or practical relevance, and academic integrity.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Manuscripts must present original, unpublished work that has not been submitted to or published in any other journal or conference proceedings.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">All papers must be written in clear, concise, and grammatically correct English. Submissions must be well-organized and professionally presented.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">All figures, tables, and illustrations should be of high quality, numbered clearly, and appropriately captioned and referenced in the text.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Submission Process</h2>
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

                        <div className="bg-white p-4 h-full">
                            <div className="flex flex-col gap-3 lg:mt-9 flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It aims to make the submission process seamless and efficient for authors. All manuscripts must be prepared according to the journal's formatting guidelines and submitted electronically. </p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Send your completed manuscript via the journal's official submission portal or email.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors will receive an acknowledgment email within 48 hours confirming receipt of the manuscript.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Once the final version is approved, the paper will be published online immediately.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
