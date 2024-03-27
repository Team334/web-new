"use client"
import {AuroraBackground} from "@/components/aceternity/ui/aurora";
import {motion} from "framer-motion";
import {BentoGrid} from "@/components/aceternity/ui/bento-grid";
import {BentoGridItem} from "@/components/aceternity/ui/direction-aware-hover";
import React from "react";


export default function SponsorPage() {
    const bentoItems = [
        {
            image: "/team2022.png",
            text: <div>
                <h1>Team</h1>
                <p>Something</p>
            </div>,
            className:
                "md:col-span-1",
        },
        {
            image: "/team2022.png",
            text: <div>
                <h1>Team</h1>
                <p>Something</p>
            </div>,
            className:
                "md:col-span-2",
        },
        {
            image: "/team2022.png",
            text: <div>
                <h1>Team</h1>
                <p>Something</p>
            </div>,
            className:
                "md:col-span-3",
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
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
}
