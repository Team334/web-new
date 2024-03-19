"use client"


import {motion} from "framer-motion";
import {ImagesSlider} from "@/components/aceternity/ui/page-hero";
import React from "react";
import {title} from "@/components/primitives";
import {AwardBanner} from "@/components/awards";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/shadcn/ui/carousel"
import {Card} from "@nextui-org/card";
import {CardContent} from "@/components/shadcn/ui/card";
import {Image} from "@nextui-org/react"
import {BentoGrid, BentoGridItem} from "@/components/aceternity/ui/bento-grid";


export default function AboutPage() {
    const images = [
        "/team2021.png",
        "/team2022.png",
        "/team2023.png",
        "/team2024.png",
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


    const teamImages = [
        "/team/",
        "/team/",
        "/team/",
        "/team/",
        "/team/",
        "/team/",
        "/team/",
        "/team/",
        "/team/",
        "/team/",
    ];

    const moreItem = [
        {
            title: "Brooklyn Technical High School",
            description: "Brooklyn Technical High School (aka. “BTHS”, “Tech”) is one of New York City’s specialized\n" +
                "high schools for science, technology, engineering, and mathematics. Tech is the largest high\n" +
                "school in the United States, with an enrollment of 6,500 students across all four grades.",
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    src={"https://i.ytimg.com/vi_webp/vGIsE0y7tVQ/maxresdefault.webp"}
                    className={"object-cover"}/></div>,
            className:
                "md:col-span-2",
        },
        {
            title: "What is FIRST?",
            description: "FIRST (For Inspiration and Recognition of Science and Technology), founded in 1989 by Dean\n" +
                "Kamen and Woody Flowers, was created to assist in inspiring and teaching young explorers\n" +
                "like us to connect across the globe via engineering and innovation",
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    src={"https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/program-block-frc.jpg"}
                    className={"object-cover"}/></div>,
            className:
                "md:col-span-1",
        },
        {
            title: "More About FIRST",
            description:
                "Each year FIRST designs an international robotics competition in which 26 countries and over\n" +
                "3,200 teams participate in each year. Over 500,000 students participate in the FIRST\n" +
                "Robotics Competition itself, and high schools across the globe build a robot and compete at\n" +
                "various regional competitions. After all regionals take place, winners and award recipients\n" +
                "are invited to compete at the championship, which takes place in Houston, Texas. Over 450\n" +
                "teams proceeded to the championships in the 2022 season",
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    src={"https://www.firstinspires.org/sites/default/files/first-in-show/game-and-season/frc-header.png"}
                    className={"object-cover"}/></div>,
            className: "md:col-span-2",
        },
        {
            title: "FIRST Core Values",
            description:
                    <p>
                    Discovery: We explore new skills and ideas.
                    Innovation: We use creativity and persistence to solve problems.
                    Impact: We apply what we learn to improve our world.
                    Inclusion: We respect each other and embrace our differences.
                    Teamwork: We are stronger when we work together.
                    Fun: We enjoy and celebrate what we do!
                    </p>,
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    src={"https://www.firstinspires.org/sites/default/files/uploads/hero_headers/Header-image-fallback-gradient-high-res.jpg"}
                    className={"object-cover"}/></div>,
            className: "md:col-span-1",
        },
    ];

    // const moreItem = [
    //     {
    //         title: "Brooklyn Technical High School",
    //         description: "Brooklyn Technical High School (aka. “BTHS”, “Tech”) is one of New York City’s specialized\n" +
    //             "high schools for science, technology, engineering, and mathematics. Tech is the largest high\n" +
    //             "school in the United States, with an enrollment of 6,500 students across all four grades.",
    //         header: <Image src={""}/>,
    //         className: "md:col-span-2",
    //     },
    //     {
    //         title: "What is FIRST?",
    //         description: "FIRST (For Inspiration and Recognition of Science and Technology), founded in 1989 by Dean\n" +
    //             "Kamen and Woody Flowers, was created to assist in inspiring and teaching young explorers\n" +
    //             "like us to connect across the globe via engineering and innovation",
    //         header: "https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/program-block-frc.jpg",
    //     },
    //     {
    //         title: "More About FIRST",
    //         description:
    //             "Each year FIRST designs an international robotics competition in which 26 countries and over\n" +
    //             "3,200 teams participate in each year. Over 500,000 students participate in the FIRST\n" +
    //             "Robotics Competition itself, and high schools across the globe build a robot and compete at\n" +
    //             "various regional competitions. After all regionals take place, winners and award recipients\n" +
    //             "are invited to compete at the championship, which takes place in Houston, Texas. Over 450\n" +
    //             "teams proceeded to the championships in the 2022 season",
    //         header: "https://www.firstinspires.org/sites/default/files/first-in-show/game-and-season/frc-header.png",
    //     },
    //     {
    //         title: "FIRST Core Values",
    //         description:
    //             <div className={"space-y-1"}>
    //                 <p>
    //                     Discovery: We explore new skills and ideas.
    //                 </p>
    //                 <p>
    //                     Innovation: We use creativity and persistence to solve problems.
    //                 </p>
    //                 <p>
    //                     Impact: We apply what we learn to improve our world.
    //                 </p>
    //                 <p>
    //                     Inclusion: We respect each other and embrace our differences.
    //                 </p>
    //                 <p>
    //                     Teamwork: We are stronger when we work together.
    //                 </p>
    //                 <p>
    //                     Fun: We enjoy and celebrate what we do!
    //                 </p>
    //             </div>,
    //         header: "https://www.firstinspires.org/sites/default/files/uploads/hero_headers/Header-image-fallback-gradient-high-res.jpg",
    //     },
    // ];


    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)


    React.useEffect(() => {
        if (!api) {
            return
        }


        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)


        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


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
            <div className="w-full md:flex justify-center flex-shrink-0 mt-10 p-6 gap-5">
                <div className="flex justify-center items-center w-full md:w-[65%] float-start">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-[16rem] md:max-w-[14rem] lg:max-w-[40rem]"
                    >
                        <CarouselContent>
                            {teamImages.map((imageUrl, index) => (
                                <CarouselItem key={index}>
                                    <div className="w-full">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center">
                                                <Image
                                                    src={imageUrl}
                                                    alt={`Team member ${index + 1}`}
                                                    width={1300}
                                                    height={300}
                                                    className={"object-scale-down"}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                        <div className="py-2 text-center text-sm text-muted-foreground">
                            Image {current} of {count}
                        </div>
                    </Carousel>
                </div>
                <div className="w-full mx-auto flex justify-center items-center">
                    <div className="text-center text-wrap w-full mx-6">
                        <h1 className="text-2xl sm:text-[2rem] md:text-[2rem] lg:text-[3.1rem] font-semibold main">
                            The Team Now
                            <hr className="align-middle border-gray-500 my-3 w-[50%] overflow-x-hidden m-auto"/>
                        </h1>
                        <p className={"secondary"}>
                            Currently, our team consists of 50-60 students which come nearly every day to work on the
                            robot during the build season. After 10th period, we meet at the wonderful Ike Heller
                            Robotics Center at BTHS to build our award-winning robots. With the help of our mentors, we
                            machine and fabricate all our parts in-house—from 3D printing and sanding, to cutting on the
                            plasma cutter and the CNC machines.
                        </p>
                        <br/>
                        <p className={"secondary"}>
                            During our preseason, we exchange information between the previous members, and the
                            newcomers, ensuring that our build season occurs flawlessly. We host events and tryouts for
                            students at our school to have an opportunity to join the team. During our offseason, we
                            begin planning ahead for next year’s preseason and work on projects around the lab. We also
                            host Future Vision events, in which middle schools from all across Brooklyn come to visit
                            the school. We teach them about FIRST and engineering, while also letting them drive our
                            robot.
                        </p>
                    </div>
                </div>
            </div>
            {/*<div className="justify-center text-center mx-5">*/}
            {/*    <div className="flex-wrap">*/}
            {/*        <h1 className="mt-10 text-2xl sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2.1rem] font-semibold main ">*/}
            {/*            Brooklyn Technical High School*/}
            {/*            <hr className="align-middle border-gray-500 my-3 w-[50%] overflow-x-hidden m-auto"/>*/}
            {/*        </h1>*/}
            {/*        <p className={"secondary"}>*/}
            {/*            Brooklyn Technical High School (aka. “BTHS”, “Tech”) is one of New York City’s specialized*/}
            {/*            high schools for science, technology, engineering, and mathematics. Tech is the largest high*/}
            {/*            school in the United States, with an enrollment of 6,500 students across all four grades.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className="row-when-mobile">*/}
            {/*        <h1 className="mt-10 text-2xl sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2.1rem] font-semibold main ">*/}
            {/*            What is FIRST?*/}
            {/*            <hr className="align-middle border-gray-500 my-3 w-[50%] overflow-x-hidden m-auto"/>*/}
            {/*        </h1>*/}
            {/*        <p className={"secondary"}>*/}
            {/*            FIRST (For Inspiration and Recognition of Science and Technology), founded in 1989 by Dean*/}
            {/*            Kamen and Woody Flowers, was created to assist in inspiring and teaching young explorers*/}
            {/*            like us to connect across the globe via engineering and innovation.*/}
            {/*        </p>*/}
            {/*        <br/>*/}
            {/*        <p className={"secondary"}>*/}
            {/*            Each year FIRST designs an international robotics competition in which 26 countries and over*/}
            {/*            3,200 teams participate in each year. Over 500,000 students participate in the FIRST*/}
            {/*            Robotics Competition itself, and high schools across the globe build a robot and compete at*/}
            {/*            various regional competitions. After all regionals take place, winners and award recipients*/}
            {/*            are invited to compete at the championship, which takes place in Houston, Texas. Over 450*/}
            {/*            teams proceeded to the championships in the 2022 season.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[30rem] p-10">
                {moreItem.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}