'use client'

import {Link} from "@nextui-org/link";
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {subtitle, title} from "@/components/primitives";
import {GithubIcon, InstagramIcon} from "@/components/icons";
import Header from "@/components/typed"
import Spline from '@splinetool/react-spline';
import Skeleton from "@/components/loading";
import {useState} from "react";


export default function Home() {
	const [loading, setLoading] = useState(true);
	setTimeout(() => {
		setLoading(false);
	}, 5000)
	return (
	// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:w-auto">
	// 	<div className="inline-block text-center justify-center">
	// 		<h1 className={title({className: "mt-6 secondary"})}>We are</h1>
	// 		<br/>
	// 		<h1 className={title({color: "cyan", className: "main"})}><Header/>&nbsp;</h1>
	// 		<br/>
	// 		<h2 className={subtitle({class: "mt-7 text-lg font-bold italic secondary"})}>
	// 			The 334th Team in <a target={"_blank"}
	// 								 className={"text-sky-500 transition ease-in-out delay-300 hover:underline"}
	// 								 href={"https://www.firstinspires.org/robotics/frc"}>FRC</a> from
	// 			<a target={"_blank"} className={"text-sky-500"} href={"https://bths.edu"}> Brooklyn Technical High
	// 				School</a>
	// 		</h2>
	// 	</div>
	//
	//
	// 	<div className="flex gap-3">
	// 		<Link
	// 			isExternal
	// 			className={buttonStyles({variant: "bordered", radius: "full"})}
	// 			href={siteConfig.links.instagram}
	// 		>
	// 			<InstagramIcon size={20}/>
	// 			<b>Instagram</b>
	// 		</Link>
	// 	</div>
		<section>
			{loading ? <Skeleton /> : <Spline scene="https://prod.spline.design/sLhET4MjfcWLJ1AA/scene.splinecode" />}
		</section>
	);
}
