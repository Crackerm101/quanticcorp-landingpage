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
    console.log("🚀 ~ file: Faqs.js:7 ~ Faqs ~ data", data);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <div className="mt-20 py-20 px-3">
            <div className="rounded- grid gap-1">
                {data.data.map((props, i) => (
                    <div
                        className="content grid gap-2 rounded-md bg-black py-3 px-5"
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
                            <div className="">
                                {props.faqsitems.map((datalist) => (
                                    <ul className="flex flex-col text-title-color">
                                        <li className="list-inside list-disc">
                                            {datalist.list}
                                        </li>
                                    </ul>
                                ))}
                                <p className="text-title-color">
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

// <div className="mt-20 py-20 px-3">
//     <div className="grid gap-5 rounded-md bg-black py-3 px-5 ">
//         <div className="flex items-center gap-3">
//             <span className="text-2xl text-title-color">
//                 <AiOutlineMenuUnfold />
//             </span>

//             <h2 className="text-title-color">
//                 Project: Make IT Better for my Staff & Company
//             </h2>
//         </div>
//         <div className="text-title-color">
//             <p className="mb-5">
//                 A Director IT now CTO came across one of our messages on
//                 LinkedIn. It has been difficult finding the right team
//                 members to help support business needs.
//             </p>
//             <p>
//                 Working together we looked at, and quickly defined some
//                 of the more tedious and sensitive tasks facing the team.
//                 Things that cause the most amount of pain for both the
//                 IT staff as well as the business units. Once defined, we
//                 pulled together in short order a series of on demand
//                 resources as well a set of self-service tools. The
//                 resources worked with our clients IT team to work on
//                 tasks all via email and chat-based instructions. Turning
//                 around tasks in a short period of time.
//             </p>
//         </div>
//         <div className="mb-3 text-title-color ">
//             <p className="mb-5">Tasks like:</p>
//             <ul className="mb-5">
//                 <li>
//                     Data and Information, converted into Intelligence.
//                 </li>
//                 <li>Intelligence, developed into Predictive models.</li>
//                 <li>Predictions turned into Actions.</li>
//                 <li>Successful Actions converted into Automation.</li>
//                 <li>Repeat, CANI..</li>
//             </ul>
//             <p>
//                 Within a few months things were all caught up and
//                 continue to run smoothly. Where we could automate, we
//                 did, and where we could not, we either have continued
//                 the support, or our client has taken on the workload
//                 internally.
//             </p>
//         </div>
//     </div>
// </div>
