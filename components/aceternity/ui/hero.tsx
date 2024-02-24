"use client"
import React, {useEffect, useMemo, useState} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/legacy/image";
import {Link as NextuiLink} from "@nextui-org/link";
import Link from "next/link";
import {TextGenerateEffect} from "@/components/aceternity/ui/autotype";
import {GithubIcon, InstagramIcon} from "@/components/icons";
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {Skeleton} from "@/components/shadcn/ui/skeleton";

export const HeroParallax = ({products}: {
    products: { title: string; description: string; link: string; thumbnail: string; }[]
}) => {
    const firstRow = useMemo(() => products.slice(0, 5), [products]);
    const secondRow = useMemo(() => products.slice(5, 10), [products]);
    const ref = React.useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start start", "end start"],});

    const springConfig = {stiffness: 300, damping: 30, bounce: 100};

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

    return (
        <div ref={ref}
             className="h-[232vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] will-change-auto">
            <Header/>
            <motion.div style={{rotateX, rotateZ, translateY, opacity}} className="">
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product, index) => (
                        <ProductCard product={product} translate={translateX} key={index}/>
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20 ">
                    {secondRow.map((product, index) => (
                        <ProductCard product={product} translate={translateXReverse} key={index}/>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <h1 className="text-[2rem] md:text-7xl font-bold dark:text-white">
                <TextGenerateEffect words={"We are"}/>
                <TextGenerateEffect words={"Techknights"} className={"main"}/>
            </h1>
            <p className="text-base md:text-xl mt-8 dark:text-neutral-200">
                TechKnights is a FIRST® Robotics Competition team from Brooklyn Technical
                High School in New York City.
            </p>
            <div className="flex flex-row gap-3 mt-5 opacity-1">
                <NextuiLink
                    isExternal
                    className={buttonStyles({variant: "bordered", radius: "full"})}
                    href={siteConfig.links.instagram}
                >
                    <InstagramIcon size={20}/>
                    <b>Instagram</b>
                </NextuiLink>
                <NextuiLink
                    isExternal
                    className={buttonStyles({variant: "bordered", radius: "full"})}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20}/>
                    <b>Github</b>
                </NextuiLink>
            </div>
        </div>
    );
};

export const ProductCard = ({product, translate}: {
    product: { title: string; description: string; link: string; thumbnail: string; };
    translate: any;
}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-60 md:h-96 w-[13rem] md:w-[30rem]  relative flex-shrink-0"
        >
            {loading ? (
                <Skeleton className="w-full h-full"/>
            ) : (
                <>
                    <Link
                        href={product.link}
                        target={"_blank"}
                        className="block group-hover/product:shadow-2xl "
                    >
                        <Image
                            src={product.thumbnail}
                            height="600"
                            width="1000"
                            className="object-scale-down object-center absolute h-full w-full inset-0"
                            alt={product.title}
                            loading="lazy"
                        />
                    </Link>
                    <div
                        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
                    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                        <b>{product.title}</b> - {product.description}
                    </h2>
                </>
            )}
        </motion.div>
    );
};