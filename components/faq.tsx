"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/shadcn/ui/accordion"


export default function Faq() {
    return (
        <div className="container my-24 mx-auto md:px-6 xl:px-24">
            <section className="mb-32">
                <h2 className="mb-6 pl-6 text-[2.9rem] md:text-4xl text-center font-bold dark:text-white main">Frequently asked questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq-1">
                        <AccordionTrigger className={"text-base md:text-xl dark:text-neutral-200"}>very important information</AccordionTrigger>
                        <AccordionContent className={"text-base md:text-lg dark:text-neutral-200"}>
                            btech is better than stuy
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                        <AccordionTrigger className={"text-base md:text-xl dark:text-neutral-200"}>Dean Kamen... Read more below</AccordionTrigger>
                        <AccordionContent className={"text-base md:text-lg dark:text-neutral-200"}>
                            We got him mewing!!!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3">
                        <AccordionTrigger className={"text-base md:text-xl dark:text-neutral-200"}>shhhh</AccordionTrigger>
                        <AccordionContent className={"text-base md:text-lg dark:text-neutral-200"}>
                            🤫🧏
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    )
}