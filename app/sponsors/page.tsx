"use client"
import {AuroraBackground} from "@/components/aceternity/ui/aurora";
import {motion} from "framer-motion";
import {BentoGrid} from "@/components/aceternity/ui/bento-grid";
import {BentoGridItem} from "@/components/aceternity/ui/direction-aware-hover";
import React from "react";


export default function SponsorPage() {
    const bentoItems = [
        {
            image: "/logos/first.png",
            text: <div>
                <h1 className={"main"}>FIRST</h1>
            </div>,
            url: "https://www.firstinspires.org/",
            className:
                "md:col-span-1",
        },
        {
            image: "/sponsors/alumni-foundation.png",
            text: <div>
                <h1 className={"main"}>Brooklyn Tech Alumni Foundation</h1>
            </div>,
            url: "",
            className:
                "md:col-span-2",
        },
        {
            image: "/sponsors/arament.png",
            text: <div>
                <h1 className={"main"}>Arament Research, Development and Engineering Center</h1>
            </div>,
            url: "",
            className:
                "md:col-span-2",
        },
        {
            image: "/sponsors/con-edison.png",
            text: <div>
                <h1 className={"main"}>Con Edison</h1>
            </div>,
            url: "https://www.coned.com/en",
            className:
                "md:col-span-1",
        },
        {
            image: "/sponsors/dodstem.png",
            text: <div>
                <h1 className={"main"}>DoD STEM</h1>
            </div>,
            url: "https://www.dodstem.us",
            className:
                "md:col-span-1",
        },
        {
            image: "/sponsors/haas-foundation.png",
            text: <div>
                <h1 className={"main"}>Gene HAAS Foundation</h1>
            </div>,
            url: "https://ghaasfoundation.org/content/ghf/en/home.html",
            className:
                "md:col-span-1",
        },
        {
            image: "/sponsors/ike-heller.png",
            text: <div>
                <h1 className={"main"}>Ike Heller</h1>
            </div>,
            url: "",
            className:
                "md:col-span-1",
        },
        {
            image: "/sponsors/quotebeam.png",
            text: <div>
                <h1 className={"main"}>QuoteBeam</h1>
            </div>,
            url: "https://quotebeam.com",
            className:
                "md:col-span-1.5",
        },
        {
            image: "/sponsors/whimsy-tech.png",
            text: <div>
                <h1 className={"main"}>Whimsy Tech</h1>
            </div>,
            url: "https://whimsytech.com",
            className:
                "md:col-span-2",
        },
    ];

    return (
        <div className={"w-full"}>
            <AuroraBackground>
                <motion.div
                    initial={{opacity: 0.0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
                >
                    <div className="text-4xl md:text-7xl font-bold dark:text-white text-center main">
                        Our Sponsors
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        This page is dedicated to our all of sponsors! We couldn't make our robot without your help!
                    </div>
                </motion.div>
            </AuroraBackground>
            <div className={"h-full py-20"}>
                <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[30rem] p-10">
                    {bentoItems.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            image={item.image}
                            text={item.text}
                            url={item.url}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
}
