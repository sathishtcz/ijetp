import React, { useEffect, useState } from 'react'
import Upload from "/assets/images/Upload.png";
import pointicon from "/assets/images/pointicon.png";
import points from "/assets/images/points.png";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import cap from "/assets/images/cap.png";
import { useNavigate } from 'react-router-dom';

export default function About() {
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
            {/* About section */}

            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    About us:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } is a peer-reviewed, open-access academic journal dedicated to the advancement of research in the field of education. IJETP aims to serve as a global platform for scholars, educators, researchers, and practitioners to share innovative ideas, practices, and research findings that address current trends, challenges, and developments in education. Our journal publishes original research articles, comprehensive review papers, and technical notes focusing on educational methods, teaching technologies, learning models, curriculum design, educational policy, and other related areas. We welcome interdisciplinary approaches and studies that contribute to improving educational practices at all levels—from primary and secondary to higher education and lifelong learning. Accepted papers are published online immediately upon final submission, ensuring timely access to cutting-edge educational research for the global academic community.
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



            {/*scope and mission*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                    <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Scope</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It covers a broad range of topics related to innovative, research-based, and practical developments in the field of education. The journal welcomes original contributions that address current challenges, explore new educational methodologies, and promote the effective use of technology.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Emerging trends in education and pedagogy.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Educational assessment, testing, and evaluation methods.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Digital tools and platforms for classroom engagement.</p>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The mission is to advance the field of education by promoting high-quality, impactful, and innovative research. We strive to foster a global academic community that shares knowledge, explores emerging educational practices, and contributes to the improvement of teaching and learning worldwide.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">To publish relevant research that addresses future educational challenges.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">To promote equitable, inclusive, and accessible education for all.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">To encourage interdisciplinary approaches and global perspectives in education.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>



            </div>



            {/*Featured Topics*/}
            <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Journal Features</h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <div className="flex gap-1 items-center ">
                        <IoCheckmarkCircleOutline className="text-[#CF3A2B] lg:text-3xl text-2xl" />
                        <p className="namdhinggo-bold lg:text-[30px] text-xl text-[#CF3A2B]">Technology-Enhanced Learning</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The rapid integration of technology into education has transformed how knowledge is delivered and consumed. This subtopic examines how tools like artificial intelligence (AI), virtual reality (VR), and gamification are reshaping learning experiences, alongside the evolution of online and hybrid education models.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Analyze how game-based learning enhances motivation and retention, with case studies from diverse educational systems.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify"> Assess barriers to technology adoption in underserved regions (e.g., lack of infrastructure, training) and propose solutions.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Explore how AI-driven tools (e.g., adaptive learning platforms, chatbots) personalize education and support teachers in assessment and curriculum design.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <div className="flex gap-1 items-center ">
                        <IoCheckmarkCircleOutline className="text-[#CF3A2B] lg:text-3xl text-2xl" />
                        <p className="namdhinggo-bold lg:text-[30px] text-xl text-[#CF3A2B]">Sustainable Education Practices</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Sustainability in education extends beyond environmental concerns to encompass resource-efficient teaching methods and preparing students for a future.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify"> Explore curricula that integrate climate science and sustainability, with examples of project-based learning (e.g., school gardens, renewable energy projects).</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Assess the adoption of free, reusable learning materials to reduce costs and environmental impact.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Propose frameworks to evaluate the effectiveness of sustainable education practices over time.</p>
                        </div>
                    </div>

                </div>


                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center ">
                        <IoCheckmarkCircleOutline className="text-[#CF3A2B] lg:text-3xl text-2xl" />
                        <p className="namdhinggo-bold lg:text-[30px] text-xl text-[#CF3A2B]">Teacher Empowerment</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Teachers are at the heart of educational transformation, yet they face unprecedented demands in adapting to new technologies, diverse classrooms, and shifting expectations.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Explore online platforms, micro-credentials, and AI-supported coaching for continuous teacher development.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Highlight international teacher exchanges or virtual communities that share best practices across borders.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Investigate training that equips teachers to handle multicultural or neurodiverse student populations.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Submission Guidelines</h2>
                        </div>
                    </div>
                <div className="bg-white p-4  h-full  ">
                    <div className="flex flex-col justify-center p-2">
                        <p className="text-gray-900 mb-2 px-4 lg:px-0 text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                            The International Journal of Educational Trends and Practices welcomes original research articles, review papers, and practical notes that align with its scope of exploring innovative trends and effective practices in education. Authors must ensure that their submissions are original, unpublished, and not under consideration elsewhere. Manuscripts should be formatted according to the journal’s template, including structured sections such as abstract, introduction, methodology, results, discussion, and references.
                        </p>


                    </div>

                    <div className='text-center'><button onClick={() => navigate('/authorguidelinespage')} className="bg-[#CF3A2B] text-white px-4 py-3  cursor-pointer  ">

                        Submission Guidelines

                    </button></div>

                </div>
            </div>



        </>
    )
}
