import { useEffect, useRef } from "react";

function demovideo() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <section className="mt-20">
            <h1 className="mb-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-center text-4xl font-black text-transparent md:text-4xl lg:text-5xl">
                PROJECT EXAMPLES
            </h1>
            <p className="mx-auto max-w-2xl text-center text-title-color">
                Our wide range of expertise in business, operations, and
                technology, combined with our decades of experience through
                varying environments, allows us a unique perspective and
                approach in solving problems and overcoming barriers to success.
            </p>
            <div className="mt-10 grid h-full w-full place-items-center">
                <video
                    style={{
                        maxWidth: "100%",
                        width: "70%",
                        margin: "0 auto",
                        borderRadius: "10px",
                    }}
                    muted
                    controls
                    alt="All the devices"
                    src="https://res.cloudinary.com/dn5rd6g4b/video/upload/v1675702012/it-webpage/video_pozxeq.mp4"
                    ref={videoEl}
                />
            </div>
        </section>
    );
}

export default demovideo;
