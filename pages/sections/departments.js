import Image from "next/image";

export default function departments() {
    return (
        <section className="mt-20 h-full">
            <h1
                className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-center 
            text-4xl font-black text-transparent md:text-4xl lg:text-5xl"
            >
                WE CONTINUOUSLY INVEST
                <br /> IN THE FUTURE
            </h1>
            <p className="mx-auto max-w-lg text-center text-title-color">
                DECADES OF EXPERIENCE & EXPERTISE. ONLY PAY FOR WHAT YOU NEED,
                WHEN YOU NEED IT. LOCAL ORLANDO, FL.
            </p>
            <div className="h-full w-full py-20 md:flex md:flex-col ">
                <p className="mx-auto max-w-2xl text-center text-title-color">
                    Our long-term investment in tech, to help us determine what
                    works where, benefits you, our customers because we can go
                    straight to what works without the risk of trying something,
                    having it not work and then having to try again.
                </p>
                <div className="flex justify-center py-5">
                    <button
                        type="button"
                        className="mr-3 w-max rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 
                        focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                    >
                        REQUEST CONSULTATION
                    </button>
                </div>

                <ul className="relative z-10 grid grid-cols-1 gap-5 py-10 px-3 md:grid md:grid-cols-4">
                    <li
                        className="
                     md:flex-grow-1 flex max-w-full items-center 
                     gap-5 text-center md:flex 
                     md:flex-col"
                    >
                        <span
                            className="relative flex items-center justify-center 
                        after:absolute after:-top-2 after:-z-10 after:h-20 after:w-20 after:animate-spin after:rounded-full
                        after:bg-gradient-to-r after:from-purple-500 after:via-blue-500 after:to-purple-900 after:p-1 after:content-['']"
                        >
                            <h1
                                className="z-10 my-0 mx-auto flex h-16 w-16 items-center justify-center rounded-full
                             bg-card-color text-2xl font-bold text-gray-200 "
                            >
                                1
                            </h1>
                        </span>
                        <span className="text-center text-sm font-medium text-title-color">
                            Data and Information, converted into Intelligence.
                        </span>
                    </li>
                    <li
                        className="flex-grow-1 relative flex max-w-full items-center gap-5 text-center
                     after:absolute after:left-8 after:top-0 after:-z-20 after:h-1 after:w-32 after:-translate-x-1/2
                     after:rotate-90 after:bg-gradient-to-r after:from-purple-500 after:via-blue-500 after:to-purple-900 after:content-['']
                     md:flex md:flex-col md:after:absolute md:after:left-0 md:after:top-8 md:after:-z-20 md:after:h-1
                     md:after:w-full md:after:-translate-x-1/2 md:after:rotate-180
                     md:after:bg-gradient-to-r md:after:from-purple-500 md:after:via-blue-500 md:after:to-purple-900
                     md:after:content-['']"
                    >
                        <span
                            className="relative flex items-center justify-center
                        after:absolute after:-top-2 after:-z-10 "
                        >
                            <h1
                                className="z-10 my-0 mx-auto flex h-16 w-16 items-center justify-center rounded-full
                             bg-card-color text-2xl font-bold text-gray-200 "
                            >
                                2
                            </h1>
                        </span>
                        <span className="text-center text-sm font-medium text-title-color">
                            Intelligence, developed into Predictive models.
                        </span>
                    </li>
                    <li
                        className="flex-grow-1 relative flex max-w-full items-center gap-5 text-center
                     after:absolute after:left-8 after:top-0 after:-z-20 after:h-1 after:w-32 after:-translate-x-1/2
                     after:rotate-90 after:bg-card-color after:content-['']
                     md:flex md:flex-col md:after:absolute md:after:left-0 md:after:top-8 md:after:-z-20 md:after:h-1
                     md:after:w-full md:after:-translate-x-1/2 md:after:rotate-180
                     md:after:bg-card-color
                     md:after:content-['']"
                    >
                        <span className="relative flex items-center justify-center">
                            <h1
                                className="z-10 my-0 mx-auto flex h-16 w-16 items-center justify-center rounded-full
                             bg-card-color text-2xl font-bold text-gray-200 "
                            >
                                3
                            </h1>
                        </span>
                        <span className="text-center text-sm font-medium text-title-color">
                            Predictions turned into Actions.
                        </span>
                    </li>
                    <li
                        className="flex-grow-1 relative flex max-w-full items-center gap-5 text-center
                     after:absolute after:left-8 after:top-0 after:-z-20 after:h-1 after:w-32 after:-translate-x-1/2
                     after:rotate-90 after:bg-card-color after:content-['']
                     md:flex md:flex-col md:after:absolute md:after:left-0 md:after:top-8 md:after:-z-20 md:after:h-1
                     md:after:w-full md:after:-translate-x-1/2 md:after:rotate-180
                     md:after:bg-card-color
                     md:after:content-['']"
                    >
                        <span
                            className="relative flex items-center justify-center
                       "
                        >
                            <h1
                                className="z-10 my-0 mx-auto flex h-16 w-16 items-center justify-center rounded-full
                             bg-card-color text-2xl font-bold text-gray-200 "
                            >
                                4
                            </h1>
                        </span>
                        <span className="text-center text-sm font-medium text-title-color">
                            Successful Actions converted into Automation.
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
