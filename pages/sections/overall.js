import React from "react";
import Image from "next/image";
import { CgRadioChecked } from "react-icons/cg";
export default function overall() {
    return (
        <section>
            <h1
                className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-center text-4xl font-black text-transparent 
            md:text-4xl lg:text-5xl"
            >
                FOR TECHNOLOGY <br /> DEPARTMENTS
            </h1>
            <div className="grid grid-cols-1 place-items-center items-center gap-2 py-32 lg:grid-cols-2">
                <span className="flex justify-center align-middle">
                    <Image
                        src="/image/Department.svg"
                        width="504"
                        height="450"
                        alt="organization-icons"
                    />
                </span>
                <span>
                    <h3 className="text-3xl font-medium text-title-color">
                        We focus on:
                    </h3>
                    <div className=" flex flex-col py-3 leading-relaxed text-title-color">
                        <span className="flex items-center gap-2">
                            <CgRadioChecked />
                            Understanding Customers, their behavior, their wants
                            & where new ones might
                        </span>
                        <span className="flex items-center gap-2">
                            <CgRadioChecked />
                            Increase Visibility & Awareness
                        </span>
                        <span className="flex items-center gap-2">
                            <CgRadioChecked />
                            Standardize & Increase Efficiencies for the Customer
                            Journey.
                        </span>
                    </div>
                    <h3 className="text-3xl font-medium text-title-color">
                        We do this using:
                    </h3>
                    <div className="py-3 leading-relaxed text-title-color">
                        <span className="flex items-center gap-2">
                            <CgRadioChecked />
                            Data & Information processing, analysis &
                            visualization. Data Science principals.
                        </span>
                        <span className="flex items-center gap-2">
                            <CgRadioChecked />
                            Self service portals and tools
                        </span>
                        <span className="flex items-center gap-2">
                            <CgRadioChecked />
                            Simulations & Predictive modeling
                        </span>
                        <span className="flex items-center gap-2">
                            <CgRadioChecked />
                            Development, Artificial Intelligence, ML
                        </span>
                    </div>
                    <button
                        type="button"
                        className="mr-3 w-max rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white
                         hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                    >
                        REQUEST CONSULTATION
                    </button>
                </span>
            </div>
        </section>
    );
}
