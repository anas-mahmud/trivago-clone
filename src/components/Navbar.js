import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-200 text-sm py-4 dark:bg-gray-200">
                <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <Link className="flex-none text-xl font-semibold dark:text-gray-800" href="#">Brand</Link>
                        <div className="sm:hidden">
                            <button type="button" onClick={showMenu} className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                {active ? <RxHamburgerMenu /> : <RxCross2 />}
                            </button>
                        </div>
                    </div>
                    <div className={active ? "hidden sm:block" : "block"}>
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                            <Link className="font-medium text-blue-500" href="#" aria-current="page">Landing</Link>
                            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Account</Link>
                            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Work</Link>
                            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Blog</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;