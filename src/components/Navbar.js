import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BsHeart } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-200 text-sm py-6 dark:bg-gray-800 border-b-[1px] border-gray-300">
                <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <Link className="flex-none text-4xl font-bold dark:text-gray-800 lg:hidden sm:block" href="#"><span className='text-sky-600'>tri</span><span className='text-amber-500'>va</span><span className='text-rose-600'>go</span></Link>
                        <div className="sm:hidden">
                            <button type="button" onClick={showMenu} className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                {active ? <RxHamburgerMenu /> : <RxCross2 />}
                            </button>
                        </div>
                    </div>
                    <div className={active ? "hidden sm:block" : "block"}>
                        <div className="flex flex-col gap-14 mt-5 pr-10 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                            <div className='flex'>
                                <BsHeart className='relative top-[2px] mr-2 text-lg' />
                                <Link className="font-medium text-gray-600" aria-current="page">Favorites</Link>
                            </div>
                            <div className='flex'>
                                <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">Log in</Link>
                            </div>
                            <div className="dropdown dropdown-hover dropdown-end">
                                <div className='flex'>
                                    <label tabIndex={0} className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 m-1">Menu</label>
                                    <MdKeyboardArrowDown className='relative top-[6px] text-lg' />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link>Recently Viewed</Link></li>
                                    <li><Link>Help and Support</Link></li>
                                </ul>
                            </div>
                            <div className='flex'>
                                <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">INR</Link>
                                <MdKeyboardArrowDown className='relative top-[2px] ml-1 text-lg' />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;