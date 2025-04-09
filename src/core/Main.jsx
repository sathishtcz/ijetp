import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function Main() {
  return (
    <>
    <Header />
      <main className={`w-auto mx-auto lg:pr-2 pr-2 lg:p-0 p-2 lg:pl-4 pl-2  xl:max-w-[1500px]  md:max-w-[920px] lg:mb-6 mb-3 min-h-[85vh]  lg:mt-[120px] mt-22 `}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
