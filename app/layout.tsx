import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";
import React from "react";


export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	initialScale: 1,
	width: 'device-width'
}
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/logo.png",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
	}
};



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="header w-full flex items-end justify-end py-3 p-6">
							<Link
								isExternal
								className="flex justify-items-end gap-1 text-current"
								href="https://github.com/Team334"
								title="Team 334"
							>
								<span>Made by</span>
								<p className="text-primary">Team 334</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
