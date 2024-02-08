"use client"

import { motion } from "framer-motion";
import {ImagesSlider} from "@/components/ui/page-hero";
import React from "react";
import {AwardBanner} from "@/components/ui/awards";
import {title} from "@/components/primitives";

export default function AboutPage() {

	return (
		<div >
			<div className={"container justify-center text-center"}>
				<h1 className={title({class: "main"})}>Awards</h1>
				
			</div>
		</div>
	);
}