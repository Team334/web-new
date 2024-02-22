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
import {Image, NavbarMenu} from "@nextui-org/react";
import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {GithubIcon, HeartFilledIcon, InstagramIcon} from "@/components/icons";
import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/shadcn/ui/dropdown-menu";

const Profile = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    return (
        isAuthenticated && (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Image
                        src={user.picture}
                        alt={user.name}
                        width={48}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Hi {user.name}!</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href={"/settings"}>Settings</Link>
                        <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={handleLogout}>
                            Log out
                            <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    );
};


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
    return (
        // <NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl"
        // 			  position="sticky" className={"z-20 top-10 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] m-0 max-w-screen-xl mx-auto shadow"}>
        // 	<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        // 		<NavbarBrand as="li" className="mt-1 gap-3 max-w-fit">
        // 			<NextLink className="flex justify-start items-center gap-2 ml-2" href="/">
        // 				<Image
        // 					width={42}
        // 					alt={"logo"}
        // 					src={"/logo.png"}
        // 					/>
        // 				<p className="font-bold main">Team 334</p>
        // 			</NextLink>
        // 		</NavbarBrand>
        // 		<NavbarMenu>
        // 			{siteConfig.navItems.map((item) => (
        // 				<NavbarMenuItem key={item.href} className={"flex justify-start items-center"}>
        // 					<NextLink
        // 						className={clsx(
        // 							linkStyles({color: "foreground"}),
        // 							"data-[active=true]:text-primary data-[active=true]:font-medium"
        // 						)}
        // 						color="foreground"
        // 						href={item.href}
        // 					>
        // 						{item.label}
        // 					</NextLink>
        // 				</NavbarMenuItem>
        // 			))}
        // 		</NavbarMenu>
        // 			{siteConfig.navItems.map((item) => (
        // 				<NavbarItem key={item.href}>
        // 					<NextLink
        // 						className={clsx(
        // 							linkStyles({color: "foreground"}),
        // 							"data-[active=true]:text-primary data-[active=true]:font-medium transition ease-in-out delay-200 hover:text-blue-600 font-bold"
        // 						)}
        // 						color="foreground"
        // 						href={item.href}
        // 					>
        // 						{item.label}
        // 					</NextLink>
        // 				</NavbarItem>
        // 			))}
        // 	</NavbarContent>
        //
        // 	<NavbarContent
        // 		className="hidden sm:flex basis-1/5 sm:basis-full"
        // 		justify="end"
        // 	>
        // 		<NavbarItem className="hidden sm:flex gap-2">
        // 			<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
        // 				<InstagramIcon className="tex	t-default-500"/>
        // 			</Link>
        // 			<ThemeSwitch/>
        // 		</NavbarItem>
        // 		<NavbarItem className="hidden md:flex">
        // 			<Button
        // 				isExternal
        // 				as={Link}
        // 				className="text-sm text-default-800 font-bold bg-default-100"
        // 				href={siteConfig.links.donate}
        // 				startContent={<HeartFilledIcon className="text-danger" />}
        // 				variant="flat"
        // 			>
        // 				Donate
        // 			</Button>
        // 		</NavbarItem>
        // 	</NavbarContent>
        //
        // 	<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        // 		<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
        // 			<InstagramIcon className={"text-default-500"}/>
        // 		</Link>
        // 		<ThemeSwitch/>
        // 		<NavbarMenuToggle/>
        // 	</NavbarContent>
        // </NextUINavbar>
        <NextUINavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}
                      className={"flex z-20 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] max-w-screen-lg mx-auto mt-7 shadow"}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Link className="flex justify-start items-center gap-2 ml-2 flex-shrink-0 mt-1" href="/">
                        <Image
                            width={64}
                            alt={"logo"}
                            src={"/logo.png"}
                            className={"flex-shrink-0"}
                        />
                        <p className="font-bold main">Team 334</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Link
                            className={clsx(
                                linkStyles({color: "foreground"}),
                                "data-[active=true]:text-primary data-[active=true]:font-medium transition ease-in-out delay-200 hover:text-blue-600 font-bold"
                            )}
                            color="foreground"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="md:flex gap-2">
                    <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram"
                          className={"hidden md:flex"}>
                        <InstagramIcon className="text-default-500 m-auto"/>
                    </Link>
                    <Link isExternal href={siteConfig.links.github} aria-label="Github" className={"hidden md:flex"}>
                        <GithubIcon className={"text-default-500 m-auto"}/>
                    </Link>
                    <ThemeSwitch/>
                </NavbarItem>

                <NavbarItem className="md:flex">
                    <Button
                        isExternal
                        as={Link}
                        className="text-sm text-default-800 font-bold bg-default-100"
                        href={siteConfig.links.donate}
                        startContent={<HeartFilledIcon className="text-danger m-auto"/>}
                        variant="flat"
                    >
                        Donate
                    </Button>
                </NavbarItem>
                <NavbarItem className="md:flex"> {/* Move Profile component here */}
                    <Profile />
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu
                className={"box-border border-shadow-lg p-0 capitalize rounded-[1.1rem] shadow flex flex-col justify-center mt-10 space-y-10 space-x-2"}>
                <NavbarMenuItem>
                    <Link
                        color={"success"}
                        className={"w-full text-center block main text-2xl"}
                        href={"/"}
                        size={"lg"}
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                {siteConfig.navItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className={"hover:animate-pulse"}>
                        <Link
                            color={
                                index === 1 ? "primary" : index === siteConfig.navItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full text-center block main text-2xl"
                            href={item.href}
                            size="lg"
                            onPress={() => setIsMenuOpen()}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
};
