"use client"
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/react";
import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {GithubIcon, HeartFilledIcon, InstagramIcon,} from "@/components/icons";
import React from "react";
import {NavbarMenu} from "@nextui-org/react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	return (
		<NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl"
					  position="sticky" className={"z-20 top-10 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] m-0 max-w-screen-xl mx-auto shadow"}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="mt-1 gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-2 ml-2" href="/">
						<Image
							width={42}
							alt={"logo"}
							src={"/logo.png"}
							/>
						<p className="font-bold main">Team 334</p>
					</NextLink>
				</NavbarBrand>
				<NavbarMenu>
					{siteConfig.navItems.map((item) => (
						<NavbarMenuItem key={item.href} className={"flex justify-start items-center"}>
							<NextLink
								className={clsx(
									linkStyles({color: "foreground"}),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
				<ul className="font-sans hidden lg:flex gap-4 items-center justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({color: "foreground"}),
									"data-[active=true]:text-primary data-[active=true]:font-medium transition ease-in-out delay-200 hover:text-blue-600 font-bold"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
						<InstagramIcon className="tex	t-default-500"/>
					</Link>
					<ThemeSwitch/>
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="text-sm text-default-800 font-bold bg-default-100"
						href={siteConfig.links.donate}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Donate
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
					<InstagramIcon className={"text-default-500"}/>
				</Link>
				<ThemeSwitch/>
				<NavbarMenuToggle/>
			</NavbarContent>
		</NextUINavbar>
	);
};
