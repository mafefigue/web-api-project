import Logo from '../assets/Logo.svg'

import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

import {CgSearch} from "react-icons/cg"


export const Header = () => {

    const [nav, setNav] = useState (false)

    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
        <div className=' bg-slate-900'>
        <header className="flex place-content-between h-24">
        <img className=" flex box-border h-50" src={Logo} alt="Logo" />

            {/*navbar*/}
            <div className="flex justify-between items-center h-24 text-white ">
        <ul className=" hidden md:flex">

            <li className=" p-14 text-2xl"> <a href="#">INICIO</a> </li>

            <li className=" p-14 text-2xl"> <a href="#">ARTICULOS</a> </li>

            <li className=" p-14 text-2xl"> <a href="#">SERVICIOS</a> </li>

            <li className=" p-14 text-2xl"> <a href="#">EMPRENDIMIENTOS</a> </li>
        </ul>

        <div onClick={handleNav} className=' block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} color='white' />}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-black bg-slate-600 ease-in-out duration-500' :'fixed left-[100%]' }>
        <ul className="uppercase p-4 ">

            <li className=" p-4"> <a href="#">INICIO</a> </li>

            <li className=" p-4"> <a href="#">ARTICULOS</a> </li>

            <li className=" p-4"> <a href="#">SERVICIOS</a> </li>

            <li className=" p-4"> <a href="#">EMPRENDIMIENTOS</a> </li>
        </ul>
        </div>

    </div>
            
    {/* search bar*/}        
    <form className=" w-[540px] relative  place-self-center md:shrink-0 sm:shrink-0 shrink-0">
        <div className="relative">
            <input type="search" placeholder="type here" className=" w-96 p-4 rounded-full bg-slate-800" />
            <button className=" flex absolute right-44 top-1/2 -translate-y-1/2 p-3 bg-slate-500 rounded-full" >
            <CgSearch />
            </button>
        </div>
        
        <div className="absolute top-20 p-4 bg-slate-800 text-white w-96
        rounded-xl left-48 -translate-x-1/2 flex flex-col gap-2">
        </div>
        </form>
        
        {/*profile pic button*/}
        <div className=" relative ">
              <button className="absolute right-8 top-1/2 
              -translate-y-1/2 p-6 bg-black rounded-full" >    
              </button>
          </div>
        </header>
        </div>
    )
}

