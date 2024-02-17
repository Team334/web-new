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
        speed={100}
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
                            <Card className="w-[350px] max-w-full h-[350px] relative border-b-0  md:w-[450px] max-h-full text-center border border-slate-700 rounded-lg shadow">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col">
                                    <h1 className="font-bold text-2xl secondary">{item.title}</h1>
                                </CardHeader>
                                <CardBody className="py-2 flex justify-center items-center">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl relative align-middle overflow-y-hidden"
                                        src={item.link}
                                        height={"230"}
                                        width={"230"}
                                    />
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                ))}
            </Marquee>
    );
};
