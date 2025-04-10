import React, { useEffect, useState } from 'react'
import Upload from "/assets/images/Upload.png";
import pointicon from "/assets/images/pointicon.png";
import points from "/assets/images/points.png";
import cap from "/assets/images/cap.png";

export default function AimScope() {

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
            {/*Aim annd Scope Section */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    Aim and Scope:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { }  aims to advance the global understanding and application of innovative trends and effective practices in education by providing a platform for researchers, educators, policymakers, and practitioners to share high-quality, evidence-based research that bridges theory and practice. Its scope encompasses a wide range of topics, including technology integration (e.g., artificial intelligence and online learning), equity and inclusion strategies, sustainable educational practices, teacher development, and policy analysis, with a focus on fostering transformative approaches to teaching, learning, and systemic reform across diverse contexts.
                </p>
                <div className="text-start">
                    <a href="https://www.ijetp.com/ijetp/index.php/ijetp/about/submissions" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#CF3A2B] text-white px-4 py-3  cursor-pointer  ">
                            <div className="flex justify-between gap-2 ">
                                {" "}
                                Submit Manuscript
                                <img
                                    src={Upload}
                                    alt="Submit Icon"
                                    className="w-[26px] h-[22px]"
                                />
                            </div>
                        </button>
                    </a>
                </div>
            </div>


            {/*Aim and scope*/}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Aim</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It is dedicated to advancing the field of education by promoting cutting-edge research and practical solutions that address the evolving needs of learners, educators, and educational systems worldwide. Our primary aim is to foster a dynamic, international exchange of ideas that drives innovation, enhances teaching and learning practices, and informs policy decisions.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Encourage the submission of high-quality, original research that pushes the boundaries of educational theory and practice.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Highlight groundbreaking approaches, such as technology integration and novel pedagogies, to inspire transformative change in classrooms and beyond.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Foster contributions that connect academic research with on-the-ground applications to benefit real-world educational settings.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Scope</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP encompasses a broad yet focused spectrum of topics that reflect the dynamic nature of education in a globalized world. The journal welcomes contributions that explore innovative trends, evidence-based practices, and systemic solutions shaping educational landscapes across diverse cultural, economic, and technological contexts.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Covers the application and impact of tools such as AI, virtual reality, online learning platforms, and gamification on educational outcomes.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Includes studies on reducing disparities in access, supporting marginalized learners, and fostering inclusive pedagogies across diverse settings.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Encourages research that examines universal educational trends alongside region-specific challenges and solutions.</p>
                        </div>
                    </div>

                </div>


            </div>


            {/*Vision and mission*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full  border-2 border-[#CF3A2B]">
                    <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Vision</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Our vision is to empower educators, researchers, and policymakers with insights that foster innovation, equity, and sustainability, while our reach extends to a wide array of topics—from technology-driven pedagogies.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Drive forward-thinking research to enhance educational theory and practice.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Foster a worldwide exchange of ideas among education stakeholders.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Address equity and inclusion to ensure access for all learners.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Mission</h2>
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

                        <div className="bg-white  p-4  h-full">
                            <div className="flex flex-col gap-3 lg:mt-9 flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Our goal is to expand the boundaries of educational knowledge and practice, empowering stakeholders with transformative insights that promote equity, sustainability, and excellence, while embracing a diverse range of topics.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Advance educational knowledge through rigorous, original research.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Encourage global collaboration to share trends and practices across borders.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Highlight creative pedagogies and alternative learning assessments.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
