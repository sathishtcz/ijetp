import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ojs from '/assets/images/oj.png';
import ijetp from "/assets/images/IJETP.png";

const Footer = () => {
  return (
    <footer className="bg-[#CF3A2B] text-white">
      <div className=" mx-auto px-5 max-w-[92rem]  lg:py-10 py-5">
        <div className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4">
          <div className='text-center md:text-left flex flex-col gap-4 justify-between'>
            <Link to='/'>
           
              <img className='  w-40 md:mx-0   mx-auto' src={ijetp} alt="logo" />
            </Link>
            {/* <Link to="/" className="text-white text-4xl poppins-bold">
              IJETP
            </Link> */}
            <div className='flex flex-col justify-center md:items-start items-center md:text-left lg:text-base text-sm'>
              <div className='flex gap-3 items-center'>
                <FaEnvelope />
                <p>Email: <a href="mailto:editor@ijcvmp.com" className=" ">editor@ijetp.com</a></p>
              </div>
              <div className='flex gap-3 items-center'>
                <FaGlobe />
                <p>Website: <a href="" className=" ">www.ijetp.com</a></p>
              </div>
              <div className=' p-3 '>
                <img className='md:ml-auto md:mx-0 mx-auto w-24   block' src={ojs} alt="ojs" />
              </div>
            </div>
          </div>
          <div className='lg:mx-auto md:text-left text-center '>
            <h4 className="lg:text-xl font-bold mb-2 ">Resources</h4>
            <ul className=' lg:text-base text-sm'>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a className="hover:underline w-fit"> <Link to='/aboutus'>About Us</Link></a></li>
              <li><a className="hover:underline"><Link to='/contactuspage'>Contact </Link> </a></li>
              <li><a className="hover:underline"><Link to='/editorial'>Editorial Board </Link></a></li>
              <li><a className="hover:underline"><Link to='/issues'>  Issues </Link> </a></li>
            </ul>
          </div>
          <div className='lg:ml-auto  md:text-left text-center  '>
            <div className='flex gap-4 flex-wrap justify-center items-end '>
              <div className=''>
                <h4 className="lg:text-xl font-bold mb-2 ">Journal Overview</h4>
                <ul className="lg:text-base text-sm ">
                  <li><a className="hover:underline"><Link to='/peer'> Peer Review Process </Link> </a></li>
                  <li><a className="hover:underline"><Link to='/publicationethicspage'> Publication Ethics </Link></a></li>
                  <li><a className="hover:underline"><Link to='/abstractindexing'>Abstracting and Indexing </Link></a></li>
                  <li><a className="hover:underline"><Link to='/articleprocessingpage'>Article Processing  </Link>  </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='lg:ml-auto  md:text-left text-center  '>
            <div className='flex gap-4 flex-wrap justify-center items-end '>
              <div className=''>
                <h4 className="lg:text-xl font-bold mb-2 ">Journal Policy</h4>
                <ul className="lg:text-base text-sm ">
                  <li><a className="hover:underline"><Link to='/plagiarismpage'>Plagiarism </Link></a></li>
                  <li><a className="hover:underline"><Link to='/malpracticepage'>Malpractice </Link></a></li>
                  <li><a className="hover:underline"><Link to='/correctionpage'>Correction </Link></a></li>
                  <li><a className="hover:underline"><Link to='/publicationrightspage'>Publication Rights</Link></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-white h-[1px]   mx-auto  "></h1>
      <div className='grid lg:grid-cols-3 grid-cols-1  items-center    py-3  '>
        <div>
        </div>
        <div className="text-center md:text-base text-xs">
          <p>© 2025 <span className='hover:underline' > <Link to="/" target='_blank'>IJETP</Link> </span> . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
