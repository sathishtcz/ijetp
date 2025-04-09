import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";
import points from "/assets/images/points.png";
import cap from "/assets/images/cap.png";

export default function Publicationethics() {

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
        {/*Publication Ethics: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    Publication Ethics:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } is committed to upholding the highest standards of publication ethics to ensure the integrity, credibility, and trustworthiness of its content in advancing educational trends and practices globally. Authors must submit original work, free from plagiarism, fabrication, or falsification, and properly cite all sources, including their own prior publications, to avoid self-plagiarism. They are required to disclose any conflicts of interest (e.g., funding or personal relationships) and confirm that research involving human or animal subjects adheres to ethical guidelines, such as obtaining informed consent and institutional approval, with documentation available upon request. Reviewers are expected to provide objective, constructive, and confidential evaluations, declaring any conflicts of interest and refraining from using manuscript information for personal gain.
                </p>
            </div>


            {/*Ethical Standards in Publishing and Integrity in Publication*/}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Ethical Standards in Publishing</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP is dedicated to maintaining ethical standards in publishing to ensure the integrity and reliability of research advancing educational trends and practices worldwide. Authors are required to submit original work, avoiding plagiarism, falsification, and must accurately cite all sources, including their own prior studies, while disclosing any conflicts of interest.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Submit original work with proper citations and no plagiarism.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Disclose conflicts of interest and ethical approvals for research.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Editors ensure a fair and merit-based process.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Integrity in Publication</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP upholds integrity in publication as a cornerstone of its mission to advance credible educational research and practice globally. Authors must ensure their submissions are original, free from fabricated or falsified data, and properly acknowledge all sources to prevent plagiarism or self-plagiarism, while transparently reporting any conflicts of interest.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Ensure originality and accuracy in all submissions.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Reviewers maintain objectivity and confidentiality.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Breaches may lead to retraction; email us with concerns.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Publication Ethics and Responsibilities</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP enforces publication ethics and responsibilities to safeguard the quality and trustworthiness of its contributions to educational trends and practices worldwide. Authors bear the responsibility of submitting wholly original work, avoiding plagiarism, data manipulation, or redundant publication.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Reviewers offer fair, private reviews and report conflicts.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Violations result in rejection or retraction; contact us for issues.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors submit original work and cite sources correctly.</p>
                        </div>
                    </div>

                </div>


            </div>


            {/*Ethical Responsibilities and Editorial and Peer Review Ethics*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Ethical Responsibilities</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors submitting manuscripts to IJETP must uphold the highest standards of integrity, transparency, and academic honesty. The journal expects all contributors to follow ethical guidelines throughout the research and publication process.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Submissions must be the author’s own original work.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors must properly cite sources and avoid all forms of plagiarism.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify"> Authors are obliged to promptly inform the editor of any errors.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Editorial Ethics</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The editorial board of IJETP is committed to maintaining the integrity and impartiality of the peer-review and publication process. Editors and reviewers play a crucial role in upholding the academic quality and ethical standards of the journal.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The editorial team actively checks for plagiarism and may reject submissions with ethical violations.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Communication with authors should be clear and transparent.</p>
                                </div>
                                {/* <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Networking with editors and scholars worldwide.</p>
                                </div> */}

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
