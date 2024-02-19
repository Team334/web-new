"use client"

import {Image} from "@nextui-org/react";

export const AwardBanner = ({
                                title,
                                year,
                                comp
                            }: {
    title: string;
    year: string;
    comp: string;

}) => {
    return (
        <div className="w-[120px] h-[192px]">
            <Image
                width={120}
                height={196}
                alt={"Award banner"}
                src={"/first-banner.png"}
                className={"z-0"}
            />
            <div className={"h-full flex flex-col items-center p-3 pb-6 gap-2 z-10"}>

                <Image
                    width={50}
                    height={50}
                    alt={"FIRST Logo"}
                    src={"/logos/first.png"}
                />

                <div className={"grow flex flex-col justify-center text-center"}>
                    <h1>{title}</h1>
                    <p>{year} {comp}</p>
                    {/* {TITLE} */}
                    {/* {YEAR} {COMP} */}
                </div>
            </div>
            {/* FIRST LOGO */}


        </div>
    )
}