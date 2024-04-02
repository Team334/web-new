"use client"

import React from "react";

export default function DonateLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {


    return (
        <section>
            <div className="flex justify-center gap-4 ">
                {children}
            </div>
        </section>
    );
}
