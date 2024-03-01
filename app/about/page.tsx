"use client"

import {motion} from "framer-motion";
import {ImagesSlider} from "@/components/aceternity/ui/page-hero";
import React from "react";
import {title} from "@/components/primitives";
import {AwardBanner} from "@/components/awards";

export default function AboutPage() {
    const images = [
        "/team2022.png"
    ];

    const Awards = [
        {
            title: "Finalist",
            year: "2023",
            comp: "NYC Regionals"
        },
        {
            title: "Excellence in Engineering Award",
            year: "2019",
            comp: "NYC Regionals"
        },
        {
            title: "Judges' Award",
            year: "2019",
            comp: "NYC Regionals"
        },
        {
            title: "Industrial Design Award",
            year: "2016",
            comp: "NYC Regionals"
        },
        {
            title: "Winner",
            year: "2014",
            comp: "NYC Regionals"
        },
        {
            title: "Creativity Award",
            year: "2014",
            comp: "NYC Regionals"
        },
        {
            title: "Industrial Design Award",
            year: "2013",
            comp: "NYC Regionals"
        },
        {
            title: "Creativity Award",
            year: "2012",
            comp: "NYC Regionals"
        },
        {
            title: "Gracious Professionalism Award",
            year: "2008",
            comp: "NYC Regionals"
        },
        {
            title: "Engineering Inspiration Award",
            year: "2007",
            comp: "NYC Regionals"
        },
        {
            title: "Sportsmanship Award",
            year: "2006",
            comp: "NYC Regionals"
        },
        {
            title: "Engineering Inspiration Award",
            year: "2005",
            comp: "NYC Regionals"
        },
        {
            title: "Engineering Inspiration Award",
            year: "2004",
            comp: "NYC Regionals"
        },
        {
            title: "Chairman's Award",
            year: "2003",
            comp: "NYC Regionals"
        },
        {
            title: "Rookie All-Star",
            year: "1999",
            comp: "Philadelphia Alliance Regional"
        },
    ]

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
            <div className={"w-full justify-center text-center items-center p-5"}>
                <h1 className={title({class: "main"})}>Awards</h1>
                <hr className="align-middle border-gray-500 my-2 w-[40%] overflow-x-hidden m-auto"/>
                <div className={"flex flex-wrap mt-10 gap-7 items-center justify-center"}>
                    {Awards.map((award, index) => (
                        <AwardBanner
                            key={index}
                            title={award.title}
                            year={award.year}
                            comp={award.comp}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}