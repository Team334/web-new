"use client"

import {motion} from "framer-motion";
import {ImagesSlider} from "@/components/aceternity/ui/page-hero";
import React from "react";
import {title} from "@/components/primitives";

export default function AboutPage() {
    const images = [
        "/team2022.png"
    ];

    return (
        <div className={"w-full"}>
            <div
                className="relative h-screen min-h-screen w-full justify-center items-center -top-[4rem] object-cover m-auto"
            >
                <ImagesSlider className="object-cover" images={images}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="z-50 flex flex-col justify-center items-center"
                    >
                        <motion.p
                            className="font-bold text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 main">
                            The Team Now
                        </motion.p>
                    </motion.div>
                </ImagesSlider>
            </div>
            <div className={"w-full justify-center text-center"}>
                <h1 className={title({class: "main"})}>Awards</h1>
                {/*		TODO: Awards */}
            </div>
        </div>
    );
}