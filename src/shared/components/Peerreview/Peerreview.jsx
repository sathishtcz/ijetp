import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";
import points from "/assets/images/points.png";
import cap from "/assets/images/cap.png";

export default function Peerreview() {

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
            {/*Peer Review Process: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    Peer Review Process:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } employs a rigorous peer review process to ensure the quality, validity, and relevance of published content in advancing educational trends and practices globally. All submitted manuscripts undergo a double-blind peer review, where the identities of both authors and reviewers are concealed to promote impartiality and fairness. Upon submission via the online portal [insert link or placeholder], each manuscript is first screened by the editorial team to assess its alignment with IJETP’s scope, originality, and adherence to submission guidelines. Manuscripts passing this initial review are assigned to at least two independent reviewers with expertise in the relevant field, who evaluate the work for scholarly merit, methodological soundness, clarity, and contribution to educational knowledge or practice. Reviewers provide detailed feedback and recommend acceptance, revision, or rejection, which the editorial board considers in making a final decision.
                </p>
            </div>


            {/*Manuscript Evaluation and Double-Blind Peer Review*/}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Manuscript Evaluation</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP begins the review process with a thorough manuscript evaluation to ensure submissions meet the journal’s standards for quality and relevance. Upon receipt through the online submission portal [insert link or placeholder], the editorial team conducts an initial assessment of each manuscript.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Initial check for scope fit, originality, and guideline adherence.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Ensures manuscripts are complete and properly formatted.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Non-compliant papers may be returned or declined early.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Double-Blind Peer Review</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP employs a double-blind peer review process to maintain objectivity and uphold the scholarly integrity of published work. After passing the initial manuscript evaluation, submissions are anonymized to conceal the identities of both authors and reviewers, ensuring unbiased assessments.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Anonymized review hides author and reviewer identities.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">At least two expert reviewers assess each paper.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Focuses on rigor, accuracy, and educational impact.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Editorial Decision and Publication</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Following the double-blind peer review, the editorial board reviews the reviewers’ feedback and recommendations to make a final decision: acceptance, conditional acceptance pending minor or major revisions, or rejection.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Editorial board decides based on reviewer input.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Accepted papers are edited and formatted for publication.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors review proofs before final release.</p>
                        </div>
                    </div>

                </div>


            </div>


            {/*Requirements andBenefits*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Requirements</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Reviewers are required to possess specialized knowledge in education-related areas, such as technology-enhanced learning, equity, sustainability, teacher professional development, or educational policy.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Expertise in education topics like technology or policy is essential.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Deliver thorough, unbiased feedback within 3–4 weeks.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Assess manuscripts for quality and relevance to IJETP’s goals.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Benefits</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP acknowledges reviewers’ efforts by listing their names in an annual reviewer appreciation note (with consent) and, upon request, providing certificates of contribution that enhance professional portfolios.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Early access to new research in education fields.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Opportunity to build professional skills and credentials.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Networking with editors and scholars worldwide.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
