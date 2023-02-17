import { useState, useEffect } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import axios from "axios";
import useSWR from "swr";
import { BsPlusCircleDotted } from "react-icons/bs";

import { FiMinusCircle } from "react-icons/fi";
export default function Faqs() {
    const [faqsToggle, setFaqsToggle] = useState(null);

    const faqstoggle = (i) => {
        if (faqsToggle === i) {
            return setFaqsToggle(null);
        }
        setFaqsToggle(i);
    };

    // fetch data into API
    const fetcher = (url) => axios.get(url).then((resp) => resp);
    const { data, error } = useSWR("/api/profile-data", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <div className="mt-20 py-20 px-3">
            <h1
                className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-center text-3xl font-black 
            text-transparent md:text-4xl lg:text-5xl"
            >
                PROJECT EXAMPLES
            </h1>
            <p className="mx-auto mt-1 max-w-5xl text-center text-title-color">
                Our wide range of expertise in business, operations, and
                technology, combined with our decades of experience through
                varying environments, allows us a unique perspective and
                approach in solving problems and overcoming barriers to success.
            </p>

            <p className="mx-auto mt-4 max-w-5xl text-center text-title-color">
                Our staff are permanently hired and are not brought on for any
                one project. So, you can expect a continuity not normally found
                with other agencies. Our proprietary technology captures
                knowledge and experience giving each team member instant access
                to the knowledge and experience of any other.
            </p>
            <div className="mt-5 mb-10 flex w-full justify-center">
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

            <div className="rounded- mt-5 grid gap-1">
                {data.data.map((props, i) => (
                    <div
                        className="content grid gap-2 rounded-md bg-card-color py-3 px-5"
                        key={props._id}
                    >
                        <div
                            className="flex cursor-pointer items-center gap-3  "
                            onClick={() => faqstoggle(i)}
                        >
                            <span className="text-2xl text-title-color">
                                <AiOutlineMenuUnfold />
                            </span>
                            <div className="mt-1 flex w-full items-center justify-between">
                                <h3 className="text-title-color">
                                    {props.faqtitle}
                                </h3>
                                <span className="text-2xl text-title-color">
                                    {faqsToggle === i ? (
                                        <FiMinusCircle />
                                    ) : (
                                        <BsPlusCircleDotted />
                                    )}
                                </span>
                            </div>
                        </div>
                        <div
                            className={
                                faqsToggle === i ? "faqsList show" : "faqsList"
                            }
                        >
                            <p className="mt-2 mb-2 text-title-color">
                                {props.faqsdes1}
                            </p>
                            <p className="mt-2 mb-2 text-title-color ">
                                {props.faqsdes2}
                            </p>
                            <div className=" text-title-color">
                                <p>Tasks like:</p>
                                {props.faqsitems.map((datalist) => (
                                    <ul className="mt-1 flex flex-col ">
                                        <li className="list-inside list-disc">
                                            {datalist.list}
                                        </li>
                                    </ul>
                                ))}
                                <p className="mt-1 text-title-color">
                                    {props.faqsdes3}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
