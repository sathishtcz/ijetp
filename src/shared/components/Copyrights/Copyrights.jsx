import React, { useEffect, useState } from 'react'
import points from "/assets/images/points.png";
import cap from "/assets/images/cap.png";

export default function Copyrights() {

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
            {/*Copyright Declaration: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                Copyright Declaration:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { }  requires all authors to adhere to its copyright policies to ensure the integrity and legal dissemination of published content. By submitting a manuscript, authors declare that the work is their original creation and that they hold the rights to all material included, or have obtained necessary permissions for any third-party content (e.g., figures, tables, or excerpts) protected by copyright. Upon acceptance, authors grant IJETP a non-exclusive license to publish, reproduce, distribute, and archive the manuscript in print and electronic formats, including open-access platforms, under the journal’s copyright terms, which allow for wide accessibility while retaining author attribution. Authors retain the copyright to their work but agree not to publish the same manuscript elsewhere without acknowledging IJETP as the original source of publication.
                </p>
            </div>


            {/*Publication Rights and Content Warranty*/}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mt-8  text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Publication Rights</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP establishes clear publication rights to ensure the lawful and effective dissemination of scholarly work. Upon acceptance of a manuscript, authors grant IJETP a non-exclusive, worldwide license to publish, reproduce, distribute, and archive the work in all formats, including print, digital, and open-access platforms.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors grant IJETP a non-exclusive license to publish the work.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP can distribute the manuscript in print and digital formats.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Check the publication agreement or email for more information.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Content Warranty</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP requires authors to provide a content warranty to affirm the integrity and originality of their submissions. By submitting a manuscript, authors warrant that the work is their own creation, free from plagiarism, fabrication, or falsification, and that it does not infringe upon the intellectual property rights of others.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors confirm the work is original and not plagiarized.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">All data and findings must be accurate and ethically obtained.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Permissions for others’ material must be secured and documented.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-3 ">
                    <h2 className="   text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">Legal Compliance</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP mandates that all submissions comply with applicable legal and ethical standards to protect the journal, its authors, and its readers. Authors are responsible for ensuring their manuscripts adhere to international copyright laws, and ethical research guidelines, such as those outlined in the Declaration for studies involving human participants.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Manuscripts must follow copyright and data protection laws.</p>
                        </div>
                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Include ethical approval and consent for human or animal research.</p>
                        </div>

                        <div className="flex gap-1">
                            <img src={points} alt="poinicon" className="w-5 h-5" />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Disclose any conflicts of interest upfront.</p>
                        </div>
                    </div>

                </div>


            </div>


            {/*Copyright Declaration and Author Agreement*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className="shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Copyright Declaration</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">I/We __________, the author(s) of the research paper/article entitled __________, authorize you to publish the above-mentioned paper/article in the International Journal of Educational Trends and Practices. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Aim and Scope</h2>
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
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">This agreement defines the terms and conditions for publication, safeguarding both the author's rights and the interests of the International Journal of Educational Trends and Practices. The author(s) retain full copyright ownership while granting the journal the necessary rights to publish, distribute, and archive the work.</p>      
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
