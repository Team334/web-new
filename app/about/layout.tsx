"use client"

import React from "react";
import {ImagesSlider} from "@/components/ui/page-hero";
import {motion} from "framer-motion";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const images = [
		"/team2022.png"
	];

	return (
		<section>
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
							className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 main">
							The Team now
						</motion.p>
					</motion.div>
				</ImagesSlider>
			</div>
			<div className="flex justify-center gap-4 py-8 md:py-10">
				{children}
			</div>
		</section>
	);
}
