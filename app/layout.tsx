import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";


export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	initialScale: 1,
	width: 'device-width'
}
export const metadata: Metadata = {
	metadataBase: new URL("https://bthsrobotics.com"),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/logo.png",
		shortcut: "/favicon-16x16.png",
		apple: "/logo.png",
	},
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		images: '/logo.png'
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
					"bg-background w-full overscroll-none",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="flex flex-col h-screen">
						<Navbar />
						<main className="flex-grow overflow-y-hidden overflow-x-hidden overscroll-none touch-none">
							{children}
						</main>
						<footer className="relative w-full flex py-3 p-6">
							<div className={"secondary container items-start justify-start ml-12"}>
								<span>©1998-2024 TechKnights</span>
							</div>
							<Link
								isExternal
								className="main flex justify-items-end gap-1 text-current"
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
