"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const navigationItems = [
        {
            title: "What We Do",
            href: "#what-we-do",
        },
        {
            title: "Design Work",
            href: "#design-work",
        },
        {
            title: "About",
            href: "#about",
        },
        {
            title: "Owner.com",
            href: "#owner-com",
        },
        {
            title: "Qualification",
            href: "#qualification",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-2 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-1 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink asChild>
                                        <Button variant="ghost" asChild>
                                            <Link href={item.href}>{item.title}</Link>
                                        </Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <Link href="/" className="font-headline text-2xl font-bold text-primary">
                        Tableturnerr
                    </Link>
                </div>
                <div className="hidden lg:flex justify-end w-full gap-4">
                    <Button>Get Started</Button>
                </div>
                <div className="flex w-auto shrink lg:hidden items-end justify-end ml-auto">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href={item.href}
                                            className="flex justify-between items-center"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="text-lg">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                             <Button className="mt-4">Get Started</Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}