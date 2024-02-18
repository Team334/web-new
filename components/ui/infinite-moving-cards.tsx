"use client";

import React from "react";
import Link from "next/link";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/react";
import Marquee from "react-fast-marquee";

export const InfiniteMovingCards = ({
                                        items,
                                    }: {
    items: {
        link: string;
        title: string;
        url: string;
    }[];
}) => {

    return (
        <Marquee
        speed={200}
        >
                {items.map((item, idx) => (
                    <div
                        className={"container px-3 py-5"}
                         key={item.title}
                    >
                        <Link
                            href={item.url}
                            target={"_blank"}
                        >
                            <Card className="w-[350px] max-w-full h-[350px] md:h-max-[400px] sm:[450px] relative border-b-0 md:w-[450px] max-h-full text-center border border-slate-700 rounded-lg shadow">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col">
                                    <h1 className="text-base md:text-xl mt-8 dark:text-neutral-200">{item.title}</h1>
                                </CardHeader>
                                <CardBody className="py-2 flex justify-center items-center">
                                    <Image
                                        alt="Card background"
                                        className="object-contain md:object-scale-down rounded-xl relative align-middle overflow-y-hidden"
                                        src={item.link}
                                        height={"190"}
                                        width={"190"}
                                    />
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                ))}
            </Marquee>
    );
};
