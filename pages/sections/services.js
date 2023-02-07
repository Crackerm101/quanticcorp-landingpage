import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const ServiceCard = [
    {
        id: uuidv4(),
        Stitle: "Architecture & Engineering Services",
        Slist1: "Custom System Implementation",
        Slist2: "New Development",
        Slist3: "Maintenance & Support of Existing Systems",
        Slist4: "Custom Automation (not just BOTs)",
        Slist5: "Self Service: Data Fix Tools & Services",
        Slist6: "Custom AI & ML Development & Implementationh",
        Sdesc: "Are you optimizing the oppertunities your data has to offer?",
        Sbtn: "REQUEST CONSULTATION",
    },
    {
        id: uuidv4(),
        Stitle: "Information Management Services",
        Slist1: "Visualization & Reporting",
        Slist2: "Data Processing",
        Slist3: "ETL",
        Slist4: "Engineers",
        Slist5: "Self Service: Data Fix Tools & Services",
        Slist6: "Data Analysis",
        Sdesc: "Are you optimizing the oppertunities your data has to offer?",
        Sbtn: "Here’s How We Can Help",
    },
    {
        id: uuidv4(),
        Stitle: "Management & Consultation Services",
        Slist1: "Technology Consultation",
        Slist2: "Certified Project Management",
        Slist3: "Maintenance & Support of Existing Systems",
        Slist4: "Custom Automation (not just BOTs)",
        Slist5: "Self Service: Data Fix Tools & Services",
        Slist6: "Custom AI & ML Development & Implementationh",
        Sdesc: "Are you optimizing the oppertunities your data has to offer?",
        Sbtn: "REQUEST CONSULTATION",
    },
];

export default function services() {
    return (
        <section>
            <h1 className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-center text-4xl font-black text-transparent md:text-4xl lg:text-5xl">
                OUR SERVICES
            </h1>
            <div className="grid grid-cols-1 gap-5 py-10 lg:grid-cols-3">
                {ServiceCard.map((CardProvider) => (
                    <div className="flex flex-col gap-1" key={CardProvider.id}>
                        <div className="rounded-md bg-card-color p-4">
                            <Image
                                src="/image/Lights.png"
                                width="20"
                                height="20"
                                alt="lights"
                                loading="lazy"
                            />
                        </div>
                        <div className="rounded-md bg-card-color p-4 ">
                            <h1 className="mx-10  border-b border-gray-800 py-5 text-center text-2xl font-semibold text-title-color ">
                                {CardProvider.Stitle}
                            </h1>
                            <ul className="mx-10 list-disc border-b border-gray-800 py-5 leading-10 text-title-color">
                                <li>{CardProvider.Slist1}</li>
                                <li>{CardProvider.Slist2}</li>
                                <li>{CardProvider.Slist3}</li>
                                <li>{CardProvider.Slist4}</li>
                                <li>{CardProvider.Slist5}</li>
                                <li>{CardProvider.Slist6}</li>
                            </ul>
                            <p className="mx-10 py-5 text-center text-title-color">
                                {CardProvider.Sdesc}
                            </p>
                            <div className="flex justify-center py-4">
                                <button
                                    type="button"
                                    className="mr-3 w-max rounded-lg bg-blue-700 px-5 py-2.5 text-center 
                                    text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                                >
                                    {CardProvider.Sbtn}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
