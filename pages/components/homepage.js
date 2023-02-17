import React from "react";
import Image from "next/image";
export default function homepage() {
    return (
        <section>
            <div className="relative grid items-center py-40 px-5  lg:grid-cols-2">
                <div className="flex flex-col">
                    <span className="font-bigfont text-lg font-medium leading-snug text-gray-300">
                        Information Technology (IT) <br /> Out of Orlando, FL
                        <br /> Managed: Full Time, Fractional, On Demand, Self
                        Service USA
                    </span>
                    <h1
                        className="mt-5 max-w-2xl bg-gradient-to-r from-purple-400 to-blue-600
                     bg-clip-text text-4xl 
                    font-extrabold text-transparent md:text-5xl lg:text-6xl"
                    >
                        Change is the only thing you can count on!
                    </h1>
                    <p className="py-4 text-lg font-medium text-gray-300">
                        The question is, can you keep up? we think together, you
                        can.
                    </p>
                    <button
                        type="button"
                        className="mr-3 w-max rounded-lg bg-blue-700 px-5 py-2.5
                         text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none 
                         focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                          md:mr-0"
                    >
                        REQUEST CONSULTATION
                    </button>
                </div>
                <div className="flex items-center justify-end">
                    <Image
                        src="/image/Frame.png"
                        width="512"
                        height="569"
                        alt="Hero"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="absolute top-0">
                <Image
                    src="https://res.cloudinary.com/dn5rd6g4b/image/upload/v1675621777/it-webpage/gradient-absolute_somga8.svg"
                    width="974"
                    height="847"
                    alt="Hero"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
