"use client"
import React from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/shadcn/ui/command";
import {
    AvatarIcon,
    ChatBubbleIcon,
    FileTextIcon,
    HandIcon,
    HomeIcon,
    PersonIcon,
    SketchLogoIcon
} from "@radix-ui/react-icons";
import {Link} from "@nextui-org/react";
import {siteConfig} from "@/config/site";
import {GithubIcon, InstagramIcon, YoutubeIcon} from "@/components/icons";
import {useAuth0} from "@auth0/auth0-react";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const {isAuthenticated, logout, loginWithRedirect} = useAuth0();

    React.useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (
                (navigator?.platform?.toLowerCase().includes("mac")
                    ? e.metaKey
                    : e.ctrlKey) &&
                e.key === "k"
            ) {
                e.preventDefault();
                e.stopPropagation();

                setOpen((currentValue) => {
                    return !currentValue;
                });
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        logout({logoutParams: {returnTo: window.location.origin}});
    };


    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..."/>
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading={"Suggestions"}>
                    <CommandItem>
                        <Link
                            href={"/"}
                            onClick={handleCloseDialog}
                        >
                            <HomeIcon className="mr-2 h-4 w-4 mt-[0.1rem]"/>
                            <span>Home</span>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link
                            href={"/about"}
                            onClick={handleCloseDialog}
                        >
                            <HandIcon className="mr-2 h-4 w-4"/>
                            <span>About Us</span>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link
                            href={"/team"}
                            onClick={handleCloseDialog}
                        >
                            <PersonIcon className="mr-2 h-4 w-4"/>
                            <span>Team</span>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link
                            href={"/blog"}
                            onClick={handleCloseDialog}
                        >
                            <ChatBubbleIcon className="mr-2 h-4 w-4 mt-[0.1rem]"/>
                            <span>Blog</span>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link
                            href={"/sponsors"}
                            onClick={handleCloseDialog}
                        >
                            <SketchLogoIcon className="mr-2 h-4 w-4 mt-[0.1rem]"/>
                            <span>Sponsors</span>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link
                            href={"/editor"}
                            onClick={handleCloseDialog}
                        >
                            <FileTextIcon className="mr-2 h-4 w-4"/>
                            <span>Markdown Editor</span>
                        </Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator/>
                <CommandGroup heading={"Social"}>
                    <CommandItem>
                        <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram"
                              onClick={handleCloseDialog}>
                            <InstagramIcon className="text-default-500 mt-[0.2rem] mr-2 h-4 w-4"/>
                            <span>Instagram</span>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link isExternal href={siteConfig.links.github} aria-label="Github" onClick={handleCloseDialog}>
                            <GithubIcon className="text-default-500 mt-[0.2rem] mr-2 h-4 w-4"/>
                            <span>Github</span>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube"
                              onClick={handleCloseDialog}>
                            <YoutubeIcon width={28} height={28} className={"mt-[0.2rem] mr-2 h-4 w-4"}/>
                            <span>Youtube</span>
                        </Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator/>
                <CommandGroup heading={"Settings"}>
                    <CommandItem>
                        <span>
                            {isAuthenticated ? (
                                <Link onClick={handleLogout}>
                                    <AvatarIcon className={"mr-2 h-4 w-4"}/>
                                    <span>Logout</span>
                                </Link>
                            ) : (
                                <Link onClick={() => loginWithRedirect()}>
                                    <PersonIcon className={"mr-2 h-4 w-4"}/>
                                    <span>Login</span>
                                </Link>
                            )}

                        </span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
