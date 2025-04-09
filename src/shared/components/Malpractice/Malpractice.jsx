import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";

export default function Malpractice() {

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
            {/*Malpractice Policy: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                Malpractice Policy:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } enforces a comprehensive malpractice policy to safeguard the credibility and ethical standards of its publications advancing educational trends and practices globally. Scholarly malpractice includes, but is not limited to, fabrication, falsification, duplicate publication, and authorship misconduct. Such actions undermine the trust of IJETP’s readership and academic community. The journal employs rigorous screening processes, including peer review and editorial oversight, to detect potential malpractice in submitted manuscripts.
                </p>
            </div>

            {/*Misconduct Policy and Malpractice Guidelines*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className=" shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Misconduct Policy</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="bg-white  p-4 h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP uses peer review, editorial scrutiny, and, where necessary, investigative tools to identify such violations. Authors must ensure their work is conducted and reported honestly, with full transparency about methods, findings, and any prior use of the material.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Covers fabrication, falsification, and duplicate submissions.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authorship must reflect true contributions.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Results in rejection, retraction, or institutional reports.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Malpractice Guidelines</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="bg-white p-4  h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP employs a robust review process and editorial oversight to detect these violations, expecting authors to uphold honesty in their research conduct, reporting, and submission practices, including declaring any overlaps with prior work.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Includes falsified data, duplicate work, and authorship issues.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Monitored through review and editorial processes.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Contact us for issues; aligned with COPE standards.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className=" shadow-md   overflow-hidden flex flex-col w-full mt-8  border-2 border-[#CF3A2B]">
            <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Policy</h2>
                        </div>
                    </div>
                <div className="relative flex-grow">
                    <div className="bg-white  p-4 h-full">
                        <div className="flex flex-col gap-3  flex-grow">
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify"> IJETP relies on peer review, editorial vigilance, and, if needed, additional verification to spot such issues. Authors are required to present their research with integrity, accurately detailing methods and results, and disclosing any prior submissions or conflicts.</p>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Prohibits fabricated data, duplicate work, and more.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Ensures proper authorship representation.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">May lead to rejection, retraction, or institutional notice.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
