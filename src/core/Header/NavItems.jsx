import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";


const NavItems = ({ ToggleMenu, MenuOpen, isActive, }) => {

  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setDropdown1(false);
      }
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setDropdown2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const Overview = [
    { name: "About Us", path: "/aboutus" },
    {name:"Aim and Scope", path:"/aimscope"},
    { name: "Editorial Board", path: "/editorial" },
    { name: "Issues", path: "/issues" },
    { name: "Peer Review Process", path: "/peer" },
    { name: "Publication Ethics", path: "/publicationethicspage" },
    { name: "Abstracting and Indexing", path: "/abstractindexing" },
    { name: "Article Processing", path: "/articleprocessingpage" },
    { name: "Author Guidelines", path: "/authorguidelinespage" },
  ];
  const Policy = [
    { name: "Plagiarism ", path: "/plagiarismpage" },
    { name: "Malpractice", path: "/malpracticepage" },
    { name: "Correction", path: "/correctionpage" },
    { name: "Publication Rights", path: "/publicationrightspage" },
  ];



  return (
    <>
      <nav className={`${MenuOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 mx-auto text-white bg-[#CF3A2B] min-h-screen max-h-screen max-w-80 w-full top-0 right-0 absolute z-50 `}>
        <div className="p-5">
          <div onClick={ToggleMenu} className="absolute right-5 top-5 cursor-pointer"><IoCloseCircleOutline className="text-2xl" /></div>
          <ul className="flex flex-col items-center mt-5 *:my-2 *:px-2 *:w-full hover:*:text-white overflow-y-auto max-h-[calc(100vh-150px)] ">
            <Link to="/" className={` ${isActive == '/' ? 'text-white' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);
                }}
                className="duration-300 "
              >
                Home
              </li>
            </Link>


            <li ref={dropdown1Ref} className=" "><Link onClick={() => setDropdown1(!dropdown1)} className="flex items-center gap-1" >Journal Overview <FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
              {dropdown1 &&
                <div className=" bg-primary-mid border border-gray-400 top-9 rounded-lg ">
                  <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                    {Overview.map((link, index) => (
                      <Link key={index} onClick={() => { setDropdown1(!dropdown1), ToggleMenu(false) }} to={link.path} className="!w-full" >
                        <li className="px-4 py-2  hover:text-white rounded-md border-b k" >{link.name} </li>
                      </Link>
                    ))}
                  </ul>
                </div>}
            </li>

            <li ref={dropdown2Ref} className=""><Link onClick={() => setDropdown2(!dropdown2)} className="flex items-center gap-1" >Journal Policy <FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
              {dropdown2 &&
                <div className=" bg-primary-mid border border-gray-400 top-9 rounded-lg ">
                  <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                    {Policy.map((link, index) => (
                      <Link key={index} onClick={() => { setDropdown2(!dropdown2), ToggleMenu(false) }} to={link.path} className="!w-full" >
                        <li className="px-4 py-2  hover:text-white rounded-md border-b " >{link.name} </li>
                      </Link>
                    ))}

                  </ul>
                </div>}
            </li>
            <Link to="/copyrightformpage" className={` ${isActive == '/copyright' ? ' underline underline-offset-4' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
               Copyrights
              </li>
            </Link>
            <Link to="/contactuspage" className={` ${isActive == '/contactus' ? 'underline underline-offset-4' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="text-center px-4 lg:px-0 mt-9">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#F1ECEC] text-[#CF3A2B] px-4 py-2 transition duration-300 poppins-bold" >
                    <div className='flex justify-between '>  Submit Manuscript
                      </div>
                  </button>
                </a>
              </div>
      </nav>
    </>
  );
};

export default NavItems;