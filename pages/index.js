import Head from "next/head";
import Navbar from "./components/navbar";
import Hero from "./components/homepage";
import Offer from "./sections/offer";
import Orga from "./sections/organization";
import Overall from "./sections/overall";
import Services from "./sections/services";
import Staff from "./sections/staff";
import Department from "./sections/departments";
import Footer from "./components/Footer";
import DemoVideo from "./sections/demovideo";
import Faqs from "./sections/Faqs";
export default function Home() {
    return (
        <>
            <Head>
                <title>Quantic Corp</title>
                <meta name="IT-Website" content="Landing Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="Main_Container">
                <Navbar />
                <div className="container mx-auto h-full px-5">
                    <Hero />
                    <Offer />
                    <Orga />
                    <Overall />
                    <Services />
                    <Department />
                    <DemoVideo />
                    <Staff />
                    <Faqs />
                </div>
                <Footer />
            </div>
        </>
    );
}
