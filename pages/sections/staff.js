import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Employee from "../api/employee";
import { Autoplay } from "swiper";
// import required modules

export default function staff() {
    return (
        <section className="mt-20 py-20">
            <Swiper
                slidesPerView={1}
                modules={[Autoplay]}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="Swiper"
            >
                {Employee.map((DataEmployee) => (
                    <SwiperSlide className=" ">
                        <div className="flex flex-col items-center rounded-md py-7 px-10">
                            <div className="relative">
                                <Image
                                    src={DataEmployee.Eimg}
                                    width="150"
                                    height="150"
                                    alt="EmployeeImage"
                                    loading="lazy"
                                    className="mb-1 rounded-full border-4 border-gray-200"
                                />
                                <span class="absolute bottom-1 right-8 flex h-5">
                                    <span class="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                    <span class="relative inline-flex h-5 w-5 rounded-full bg-sky-500"></span>
                                </span>
                            </div>

                            <h1 className="text-center text-2xl text-title-color">
                                {DataEmployee.Ename}
                            </h1>
                            <span className="text-1xl mb-5 text-gray-400">
                                {DataEmployee.Epostion}
                            </span>
                            <span className="mb-10 text-center text-gray-400">
                                {DataEmployee.Edesc}
                            </span>
                            <button
                                type="button"
                                className="absolute -bottom-0.5 mr-3 w-max rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white
                                 hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                            >
                                {DataEmployee.Email}
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
