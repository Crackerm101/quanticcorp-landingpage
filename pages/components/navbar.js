import React, { useState, useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
const NavData = [
    {
        id: uuidv4(),
        navData: "HOME",
        NavLink: "/",
    },
    {
        id: uuidv4(),
        navData: "IT DEPARTMENT",
        NavLink: "/department",
    },
    {
        id: uuidv4(),
        navData: "SALE & MARKETING",
        NavLink: "/sales",
    },
    {
        id: uuidv4(),
        navData: "OUR PROCESS",
        NavLink: "/process",
    },
    {
        id: uuidv4(),
        navData: "OUR STAFF",
        NavLink: "/staff",
    },
    {
        id: uuidv4(),
        navData: "BLOG",
        NavLink: "/blog",
    },
];

export default function Navbar() {
    const [toogle, setToogle] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);

    const handleToogle = () => {
        setToogle(!toogle);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setStickyNav(true);
        } else if (window.scrollY < 90) {
            setStickyNav(false);
        }
    };

    return (
        <div className="fixed top-0 z-20 mt-0 w-full">
            <div
                className={stickyNav ? "nav_container_active" : "nav_container"}
            >
                <div className="container mx-auto flex flex-wrap items-center justify-between rounded-md py-1 px-6 ">
                    <Image
                        src="https://res.cloudinary.com/dn5rd6g4b/image/upload/v1676618209/it-webpage/Qlogo_kvhixh.svg"
                        width="60"
                        height="60"
                        alt="Logo"
                        loading="lazy"
                    />
                    <div className="flex h-7 w-7 cursor-pointer lg:hidden ">
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 
                            focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={handleToogle}
                        >
                            <svg
                                className="h-6 w-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 
                                    1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`${
                            toogle ? "block" : "hidden"
                        } w-full justify-between gap-8 p-5 lg:flex lg:w-auto lg:items-center`}
                        id="navbar-sticky"
                    >
                        <ul
                            className="mt-4 flex flex-col gap-5 border-t border-gray-200 border-opacity-10 py-3 lg:mt-0 lg:flex 
                        lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:text-sm lg:font-medium"
                        >
                            {NavData.map((NavLink) => (
                                <li className="relative" key={NavLink.id}>
                                    <a
                                        href=""
                                        className="block rounded py-3 pl-3 pr-4 text-gray-400 hover:text-gray-300 dark:border-gray-700 lg:p-0 
                                        lg:hover:bg-transparent  lg:hover:text-gray-300 lg:dark:hover:bg-transparent"
                                    >
                                        {NavLink.navData}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                className="mr-3 rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white
                                 hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 md:mr-0  "
                            >
                                REQUEST DEMO
                            </button>
                            <button
                                type="button"
                                className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white
                                 hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                                 md:mr-0"
                            >
                                LOGIN
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
