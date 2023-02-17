import React from "react";
import Image from "next/image";
const contactbox = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="flex w-full max-w-lg items-center gap-2 rounded-md bg-card-color px-3 py-2 text-gray-700">
                <span>
                    <Image
                        src="/image/Lights.png"
                        width="20"
                        height="20"
                        alt="lights"
                        loading="lazy"
                    />
                </span>
                <p>Find out what we can do for you.</p>
            </div>
            <div className="">
                <form className="mt-1 w-full max-w-lg rounded-md bg-card-color px-5 py-5">
                    <div className="-mx-3 mb-2 flex flex-wrap">
                        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                            <label
                                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                for="grid-first-name"
                            >
                                Full Name
                            </label>
                            <input
                                className="mb-3 block w-full appearance-none rounded border border-violet-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                type="text"
                                placeholder="Jane"
                            />
                            <p className="text-xs italic text-red-500">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                                Email Address
                            </label>
                            <input
                                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                                type="email"
                                placeholder="sample@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                            <label
                                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                for="grid-first-name"
                            >
                                Phone Number
                            </label>
                            <input
                                className="mb-3 block w-full appearance-none rounded border border-violet-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                type="number"
                                placeholder="+63912312331"
                            />
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                                Available times for a call
                            </label>
                            <input
                                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                                type="datetime-local"
                                placeholder="sample@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="w-full px-3">
                            <label
                                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                for="grid-password"
                            >
                                Summary of what you like us to help with
                            </label>
                            <textarea
                                className=" no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                                id="message"
                            ></textarea>
                            <p className="text-xs italic text-gray-600">
                                We can work with you to setup a structure and
                                schedule which produces the best ROI. We are
                                ready to respond to RFIs, RFQs, and RFPs.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button
                                type="button"
                                className="mr-3 w-max rounded-md bg-blue-700 px-5 py-2.5
                         text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none 
                         focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                          md:mr-0"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default contactbox;
