import Image from "next/image";
import { CgRadioChecked } from "react-icons/cg";

export default function organiztion() {
    return (
        <section className=" px-5 sm:px-8 ">
            <h1
                className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text md:text-center text-3xl font-black 
            text-transparent md:text-4xl lg:text-5xl"
            >
                FOR YOUR OVERALL <br />
                ORGANIZATION
            </h1>
            <div className="grid grid-cols-1 place-items-center items-center gap-3 pt-5 mb-40 sm:py-32  md:py-32 lg:grid-cols-2">
                <span>
                    <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text">
                        We focus on:
                    </h3>
                    <ul className=" flex flex-col py-3 leading-loose text-title-color">
                        <li className="grid grid-flow-col gap-2 justify-start py-1 ">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>

                            <span className="flex leading-snug">
                                Customers, Revenue, Profitability
                            </span>
                        </li>
                        <li className="grid grid-flow-col gap-2 justify-start  py-1">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>
                            <span className="flex leading-snug">
                                Effectiveness, Efficiencies, Productivity
                            </span>
                        </li>

                        <li className="grid grid-flow-col gap-2 justify-start  py-1">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>
                            <span className="flex leading-snug">
                                Awareness, Distribution: Knowledge & Experiences
                            </span>
                        </li>
                    </ul>
                    <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text">
                        We do this using:
                    </h3>
                    <ul className="py-3 leading-loose text-title-color">
                        <li className="grid grid-flow-col gap-2 justify-start  py-1">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>
                            <span className="flex leading-snug">
                                Data & Information processing ,analysis &
                                visualization. Data Science principals.
                            </span>
                        </li>
                        <li className="grid grid-flow-col gap-2 justify-start  py-1">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>
                            <span className="flex leading-snug">
                                Self service portals and tools
                            </span>
                        </li>
                        <li className="grid grid-flow-col gap-2 justify-start  py-1">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>
                            <span className="flex leading-snug">
                                Driven, relentless, unwavering pursuit of
                                solutions for the problems you are facing.
                            </span>
                        </li>
                        <li className="grid grid-flow-col gap-2 justify-start  py-1">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>
                            <span className="flex leading-snug">
                                Simulations & Predictive modeling
                            </span>
                        </li>
                        <li className="grid grid-flow-col gap-2 justify-start  py-1">
                            <span className="mt-1">
                                <CgRadioChecked />
                            </span>
                            <span className="flex leading-snug">
                                Development, AI (Artificial Intelligence), ML
                                (Machine Learning) & Automation (Workflow or
                                Process Automation, including robotics)
                            </span>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="mr-3 w-max rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white
                         hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                    >
                        REQUEST CONSULTATION
                    </button>
                </span>
                <span className="flex justify-center align-middle">
                    <Image
                        src="/image/organization.png"
                        width="504"
                        height="450"
                        alt="organization-icons"
                    />
                </span>
            </div>
        </section>
    );
}
