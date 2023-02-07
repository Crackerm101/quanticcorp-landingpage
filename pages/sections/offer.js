import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
const OfferCard = [
    {
        id: uuidv4(),
        Cimg: "/image/Offer-1.png",
        Cdesc: "Experienced, knowledgeable, honest local people ready to help you.",
    },
    {
        id: uuidv4(),
        Cimg: "/image/Offer-2.png",
        Cdesc: "Advanced & Proprietary technologies.",
    },
    {
        id: uuidv4(),
        Cimg: "/image/Offer-3.png",
        Cdesc: "Driven, relentless, unwavering pursuit of solutions for the problems you are facing.",
    },
    {
        id: uuidv4(),
        Cimg: "/image/Offer-4.png",
        Cdesc: "Our loyalty and our commitment to your success.",
    },
];

export default function offer() {
    return (
        <section className="relative  px-5 sm:px-8 ">
            <div className="flex flex-col items-center">
                <h1
                    className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 
                bg-clip-text text-4xl font-black text-transparent md:text-4xl lg:text-5xl"
                >
                    OUR OFFERS
                </h1>
                <p className="text-center leading-snug text-title-color">
                    The result? <br /> Change makes you stronger!
                    <br /> People whom you look forward to working with.
                </p>
            </div>
            <div className="grid grid-cols-1  items-center gap-2 gap-y-16 py-32 md:grid-cols-3 lg:grid-cols-4">
                {OfferCard.map((Offerdata) => (
                    <div
                        className="relative flex h-full flex-col items-center rounded-md bg-card-color  py-8 px-10"
                        key={Offerdata.id}
                    >
                        <Image
                            className="absolute -top-12"
                            src={Offerdata.Cimg}
                            height="160"
                            width="160"
                            alt="offer-icons"
                        />
                        <p className="mt-28 text-center text-title-color">
                            {Offerdata.Cdesc}
                        </p>
                    </div>
                ))}
            </div>
            <div className="absolute right-0 top-0 -z-10 rotate-90">
                <Image
                    src="https://res.cloudinary.com/dn5rd6g4b/image/upload/v1675622277/it-webpage/Frame_10_w3pyhu.svg"
                    width="974"
                    height="847"
                    alt="Hero"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
