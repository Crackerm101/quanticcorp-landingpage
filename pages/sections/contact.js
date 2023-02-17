import React from "react";
import Contact from "../components/contactbox";
function contact() {
    return (
        <div className="conContainer">
            <div className="container mx-auto mt-20 grid grid-cols-1 gap-5 py-20 px-3 md:grid md:grid-cols-2">
                <div className="flex flex-col justify-center text-center sm:text-start ">
                    <h1
                        className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-3xl font-black text-transparent 
           md:text-4xl lg:text-5xl"
                    >
                        CONTACT US
                    </h1>
                    <p className="text-2xl font-bold text-title-color ">
                        It's Easy to Get Started...
                    </p>
                    <p className="mt-2 max-w-2xl text-title-color ">
                        With our own series of proprietary methodologies and
                        technologies, we help make the results of any effort we
                        take on clear and with a high degree of certainty.
                    </p>

                    <p className="mt-2 max-w-2xl text-title-color  ">
                        When you are ready, contact us and we will setup a short
                        discovery call and quickly determine if we can help you,
                        and how. A 30 min call could open the door to a huge set
                        of opportunities. Our teams will work hard to ensure
                        your success. Our focus is on establishing long term
                        relationships.
                    </p>
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default contact;
