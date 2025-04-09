import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";
import points from "/assets/images/points.png";
import cap from "/assets/images/cap.png";

export default function Abstractindexing() {

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
            {/*Abstracting and Indexing: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    Abstracting and Indexing:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { }  is committed to maximizing the visibility and accessibility of its published research on educational trends and practices by ensuring inclusion in reputable abstracting and indexing databases. These services enhance the discoverability of IJETP articles, allowing educators, researchers, policymakers, and practitioners worldwide to easily locate and cite the journal’s content. IJETP is currently indexed in [insert specific databases, e.g., Scopus, ERIC, Google Scholar, or placeholders if not yet indexed], with ongoing efforts to expand coverage to additional prestigious platforms that align with the journal’s mission. Each published article is assigned a unique Digital Object Identifier (DOI) to facilitate persistent linking and citation tracking across digital platforms.
                </p>
            </div>


            {/*Indexing and Accessibility and Integrity in Publication*/}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Indexing and Accessibility</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It prioritizes indexing and accessibility to ensure its research on educational trends and practices reaches a global audience of educators, researchers, and policymakers. By partnering with respected abstracting and indexing services, IJETP enhances the discoverability of its articles, making them readily available for citation and study.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Indexed in key databases to reach a wide audience.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Uses DOIs for reliable article linking and tracking.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Increases authors’ research visibility and impact.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Abstracting and Indexing Services</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It leverages abstracting and indexing services to amplify the reach and influence of its publications advancing educational trends and practices worldwide. Inclusion in these services ensures that IJETP articles are easily searchable and accessible to scholars, educators, and practitioners through databases.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Articles indexed in databases for easy searching.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Plans to grow indexing partnerships.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Enhances author recognition and research reach.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Discoverability Through Indexing</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It enhances discoverability through indexing to connect its research on educational trends and practices with a diverse global readership.This process benefits authors by increasing the visibility of their work and supports readers with a robust, searchable collection of studies.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Indexed in databases for global discoverability.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Seeks more indexing to broaden reach.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Contact us or check site for indexing info.</p>
                        </div>
                    </div>

                </div>


            </div>


            {/*Indexing Excellence and Editorial and Abstracting Access*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Indexing</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP ensures that its articles meet rigorous standards of quality and relevance, making them easily discoverable to a global audience of educators, researchers, and policymakers.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Indexed in leading databases for quality and visibility.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Aims to join more prestigious indexing platforms.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Check website or email for indexing updates.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Abstracting Access</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP prioritizes abstracting access to make its research on educational trends and practices widely available to scholars, educators, and practitioners globally. It actively works to expand its abstracting coverage.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Abstracts and articles available in key databases.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Expands abstracting to reach more readers.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Boosts authors’ work accessibility worldwide.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
