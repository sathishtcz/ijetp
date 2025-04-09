import React, { useState, useEffect } from "react";
import Upload from "/assets/images/Upload.png";
import { useNavigate } from 'react-router-dom';
import academic from "/assets/images/academic.png";
import pointicon from "/assets/images/pointicon.png";
import right from "/assets/images/right.png";
import inspector from "/assets/images/inspector.png";
import points from "/assets/images/points.png";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import cap from "/assets/images/cap.png";


export default function Home({ firstRow, secondRow, thirdRow }) {
    const navigate = useNavigate();
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
            {/* welcome section */}

            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    International Journal of Educational Trends and Practices
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } is a peer-reviewed, open-access academic journal committed to the advancement of knowledge in the field of education. It provides a dynamic platform for educators, researchers, scholars, and practitioners to explore, analyze, and share innovative educational practices, teaching methodologies, policy insights, and emerging trends across all levels of education—local, national, and global. IJETP encourages submissions that offer fresh perspectives on curriculum development, educational technology, inclusive education, classroom practices, leadership in education, and assessment strategies. The journal fosters interdisciplinary dialogue and welcomes original research articles, case studies, theoretical papers, reviews, and educational policy analyses that contribute to the understanding and improvement of teaching and learning environments.
                </p>
                <div className="text-start">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#CF3A2B] text-white px-4 py-3   cursor-pointer  ">
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


            {/*about ,aim and scope*/}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                    <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}> <div
                        className="bg-[#FFE5DA] "
                        style={{ clipPath }}
                    >
                        <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">
                            About the Journal
                        </h2>
                    </div></div>


                    <div className="relative flex-grow">
                        <div className="lg:block hidden rounded-full bg-[#FFE5DA] border-2 border-[#CF3A2B] absolute -top-13 left-15 transform -translate-x-1/2 z-10">
                            <div className="border-white border-5 rounded-full">
                                <div className="border-2 border-[#CF3A2B] rounded-full  ">
                                    <img src={academic} alt="about icon" className="w-[70px] h-[70px] p-3" />
                                </div>

                            </div>
                        </div>
                        <div className="bg-white  border-[#CF3A2B]  p-4   h-full">
                            <div className="flex flex-col gap-3 lg:mt-8 flex-grow">
                                <div className="flex gap-1">
                                    <img src={pointicon} alt="" className="w-[24px] h-[18px]" />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        The International Journal of Educational Trends and Practices is a peer-reviewed
                                        journal that publishes innovative research and insights in the field of education
                                        Technology.
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <img src={pointicon} alt="" className="w-[24px] h-[18px]" />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        It serves as a platform for educators, scholars, and policymakers to share current
                                        trends, effective practices, and emerging strategies that enhance teaching and
                                        learning across all educational levels.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate("/aboutus")}
                                className="bg-[#CF3A2B] text-white px-3 py-2  cursor-pointer mt-5"
                            >
                                <div className="flex justify-between items-center gap-1">
                                    Read More
                                    <img src={right} alt="right arrow Icon" className="w-[20px] h-[20px]" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>





                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                    <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Aim and Scope</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="lg:block hidden rounded-full bg-[#FFE5DA]  border-2 border-[#CF3A2B]  absolute -top-12 left-15 transform -translate-x-1/2 z-10 ">
                            <div className="border-white border-5 rounded-full">
                                <div className="border-2 border-[#CF3A2B] rounded-full  ">
                                    <img src={inspector} alt="about icon" className="w-[70px] h-[70px]  p-3  " />

                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4  h-full">
                            <div className="flex flex-col gap-3 lg:mt-8 flex-grow">

                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Educational Trends and Practices aims to promote scholarly research and practical advancements in the field of education. It is not limited to innovative teaching and learning strategies.  </p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The journal provides a platform for educators, researchers, policy makers, and practitioners to explore and share insights on emerging trends, innovative methodologies, and effective practices that enhance teaching and learning.</p>
                                </div>

                            </div>
                            <button onClick={() => navigate('/aimscope')} className="bg-[#CF3A2B] text-white px-3 py-2   cursor-pointer mt-5  ">
                                <div className="flex justify-between items-center gap-1 ">
                                    Read More
                                    <img
                                        src={right}
                                        alt="right arrow Icon"
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>



            </div>


            {/*Featured Topics*/}
            <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Journal Overviews</h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <div className="flex gap-1 items-center ">
                        <IoCheckmarkCircleOutline className="text-[#CF3A2B] lg:text-3xl text-2xl" />
                        <p className="namdhinggo-bold lg:text-[30px] text-xl text-[#CF3A2B]">Open Access</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP is an open-access journal, ensuring that all published articles are freely available to readers worldwide, promoting global visibility and unrestricted sharing of educational research.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP provides unrestricted access to all its published articles, ensuring that educators, researchers, and students can freely read.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP follows an open-access model, allowing readers worldwide to access and share articles freely without any subscription fees.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP ensures free and unrestricted access to all published content, supporting the global exchange of educational research.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <div className="flex gap-1 items-center ">
                        <IoCheckmarkCircleOutline className="text-[#CF3A2B] lg:text-3xl text-2xl" />
                        <p className="namdhinggo-bold lg:text-[30px] text-xl text-[#CF3A2B]">Peer-Reviewed</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">All submissions undergo a rigorous double-blind peer-review process, ensuring scholarly integrity, quality, and relevance in the field of education and teaching practices.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Manuscripts submitted to IJETP are evaluated through a rigorous double-blind peer review to ensure academic integrity and quality.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Manuscripts are reviewed by experts in the relevant field, ensuring that only high-quality, scholarly work is selected for publication.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The review process strictly adheres to ethical standards, including confidentiality, originality checks, and conflict of interest declarations.</p>
                        </div>
                    </div>

                </div>


                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center ">
                        <IoCheckmarkCircleOutline className="text-[#CF3A2B] lg:text-3xl text-2xl" />
                        <p className="namdhinggo-bold lg:text-[30px] text-xl text-[#CF3A2B]">Indexing</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP is committed to being indexed in major academic databases, enhancing discoverability, citation, and accessibility of published work to the global research community.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Indexing improves the visibility of articles, making them easier for scholars, educators, and institutions to find and cite.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Indexed journals are accessible to international researchers, enhancing global engagement and knowledge sharing.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Proper indexing contributes to higher citation rates, positively affecting the impact and reach of the author’s work.</p>
                        </div>
                    </div>

                </div>

            </div>







            {/*Keywords*/}
            <div className="shadow-md overflow-hidden flex flex-col w-full mt-8 border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                    <div
                        className="bg-[#FFE5DA] "
                        style={{ clipPath }}
                    >
                        <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Key Search Domains</h2>
                    </div>
                </div>

                <div className="bg-white p-4 h-full">
                    {/* Title */}
                    <h1 className="lg:text-[25px] text-[20px] namdhinggo-medium text-center ">
                        The journal covers the following areas of Education Trends and Practices
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                        {/* First Column */}
                        <div className="border border-[#FBB4A5] p-4  w-full">
                            <div className="bg-[#FFE5DA] p-2   text-center text-[#CF3A2B] poppins-bold text-lg">Research Areas</div>
                            <div className="p-3">
                                {firstRow.map((keyword, index) => (
                                    <div key={index} className="flex items-start mb-2">
                                        <img src={cap} alt="icon" className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                                        <span className="text-gray-900">{keyword}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Second Column */}
                        <div className="border border-[#FBB4A5] p-4  w-full">
                            <div className="bg-[#FFE5DA] p-2   text-center text-[#CF3A2B] poppins-bold text-lg">Methodologies</div>
                            <div className="p-3">
                                {secondRow.map((keyword, index) => (
                                    <div key={index} className="flex items-start mb-2">
                                        <img src={cap} alt="icon" className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                                        <span className="text-gray-900">{keyword}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className="border border-[#FBB4A5] p-4  w-full">
                            <div className="bg-[#FFE5DA] p-2   text-center text-[#CF3A2B] poppins-bold text-lg">Applications</div>
                            <div className="p-3">
                                {thirdRow.map((keyword, index) => (
                                    <div key={index} className="flex items-start mb-2">
                                        <img src={cap} alt="icon" className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                                        <span className="text-gray-900">{keyword}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/*Last*/}
            <div className="shadow-md   overflow-hidden flex flex-col w-full mt-8 border-2 border-[#CF3A2B]">
            <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Journal Announcements</h2>
                        </div>
                    </div>
                <div className="bg-white  p-4  h-full ">
                    <div className="text-center  p-4">
                        <p className="text-gray-900 mb-2 px-4 lg:px-0 lg:text-center text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                            We publish original research articles, review papers, and technical notes in the field of educational trends, innovative teaching methods, and learning practices. The journal ensures a prompt peer-review process, typically completing reviews within two weeks of submission. Accepted articles are published online immediately upon receiving the final version, ensuring quick and wide dissemination of high-quality educational research.
                        </p>
                        <div className="text-center">
                            <p className="poppins-medium  text-sm lg:text-base">
                                The last date for manuscript submission for the next issue is June 22, 2025
                            </p>
                        </div>
                        <p className=" mt-2   px-4 lg:px-0">
                            With Warm Regards, <br />
                            <span className="poppins-semibold text-gray-900">Editor-in-Chief </span><br />
                            <span className="poppins-bold text-[#CF3A2B]">IJETP</span>
                        </p>
                    </div>
                </div>
            </div>



        </>
    );
}
