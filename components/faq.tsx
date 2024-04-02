"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/shadcn/ui/accordion"


export default function Faq() {
    const faqs = [
        {
            question: "What is FIRST?",
            answer: "",
        },
        {
            question: "What does this robot do? Is this battlebots?",
            answer: "",
        },
        {
            question: "How much time do I have to dedicate to this?",
            answer: "",
        },
        {
            question: "When does the season start?",
            answer: "",
        },
        {
            question: "When/Where are competitions?",
            answer: "",
        },
        {
            question: "How do I join?",
            answer: "",
        },
        {
            question: "How much time do I have to dedicate to this?",
            answer: "",
        },
        {
            question: "When do we meet?",
            answer: "",
        },
        {
            question: "I don't particularly enjoy robotics, but I still want to be involved. Are there things I can help with?",
            answer: "",
        },
        {
            question: "Are there things that parents can do help out on the team?",
            answer: "",
        },
        {
            question: "Is it mandatory that I be and stay at every meeting?",
            answer: "",
        },
        {
            question: "I have other activities, can I still be on the team?",
            answer: "",
        },
        {
            question: "I have some other questions. How can I contact the team?",
            answer: "",
        },
    ];

    return (
        <div className="container my-12 mx-auto md:px-6 xl:px-24">
            <section className="mb-10">
                <Accordion type="single" collapsible className="w-full p-3">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index + 1}`}>
                            <AccordionTrigger className={"text-base md:text-xl dark:text-neutral-200"}>
                                <b>{faq.question}</b>
                            </AccordionTrigger>
                            <AccordionContent className={"text-base md:text-lg dark:text-neutral-200"}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>
    )
}
