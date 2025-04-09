import React, { useEffect, useState } from 'react'
import pointicon from "/assets/images/pointicon.png";

export default function Publicationights() {

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
            {/*Publication Rights Policy: */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#CF3A2B] namdhinggo-bold lg:text-4xl text-2xl">
                    Publication Rights Policy:
                </h2>
                <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    <span className="poppins-medium">
                        The International Journal of Educational Trends and Practices
                    </span>
                    { } establishes a clear publication rights policy to balance the interests of authors and the journal while ensuring the broad dissemination of research advancing educational trends and practices globally. Upon acceptance, authors retain full copyright ownership of their work but grant IJETP a non-exclusive, irrevocable, worldwide license to publish, reproduce, distribute, and archive the article in all formats, including print, electronic, and open-access platforms. This license allows IJETP to share the content with readers, index it in databases, and sublicense it to third-party aggregators (e.g., indexing services) to maximize visibility, always with proper attribution to the authors.
                </p>
            </div>

            {/*Rights and Permissions and Malpractice Guidelines*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">

                <div className=" shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                    <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Permissions</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="bg-white p-4 h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP outlines its publication rights and permissions policy to ensure a fair balance between author ownership and the journal’s mission to disseminate research on educational trends and practices globally. Upon acceptance, authors retain copyright but grant IJETP a non-exclusive, worldwide license to publish, reproduce, distribute, and archive their work across all formats, including print, online, and open-access platforms.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors keep copyright; grant IJETP a non-exclusive license.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">IJETP can publish and share work in all formats.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Permissions needed for third-party material; email for details.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div className=" shadow-md   overflow-hidden flex flex-col w-full border-2 border-[#CF3A2B]">
                    <div className="bg-[#CF3A2B] border-b-2 border-r-3 border-l-3" style={{ clipPath }}>
                        <div
                            className="bg-[#FFE5DA] "
                            style={{ clipPath }}
                        >
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Publication Rights</h2>
                        </div>
                    </div>
                    <div className="relative flex-grow">
                        <div className="bg-white p-4 h-full">
                            <div className="flex flex-col gap-3  flex-grow">
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It enforces a policy on publication rights to facilitate the global sharing of research advancing educational trends and practices while respecting author ownership. After acceptance, authors retain full copyright but provide IJETP with a non-exclusive, irrevocable license to publish, distribute, reproduce, and archive the article in print, digital, and open-access formats.</p>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Copyright stays with authors; IJETP gets a publishing license.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Articles distributed in all formats with attribution.</p>
                                </div>
                                <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors can reuse work, citing IJETP.</p>
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
                            <h2 className="text-[#CF3A2B] text-center poppins-bold lg:text-[22px] text-[18px] p-4">Distribution</h2>
                        </div>
                    </div>
                <div className="relative flex-grow">
                    <div className="bg-white p-4 h-full">
                        <div className="flex flex-col gap-3  flex-grow">
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">It defines its rights for publication and distribution to support the widespread availability of research on educational trends and practices while protecting author rights. Upon acceptance, authors maintain copyright ownership but grant IJETP a non-exclusive, global license to publish, reproduce, distribute, and archive their work in all mediums, including print, online, and open-access platforms.</p>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Authors hold copyright; IJETP gains distribution rights.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Work published in all formats with author credit.</p>
                            </div>
                            <div className="flex gap-1"> <img src={pointicon} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Reuse permitted with IJETP acknowledgment.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
