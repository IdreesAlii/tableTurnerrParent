'use client'
import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[100dvh] flex justify-center text-center pt-32 sm:pt-40 pb-24">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
                ></video>
                <div className="absolute inset-0 bg-background/80"></div>
            </div>
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center items-center px-6 lg:px-12">
                <div className="mx-auto max-w-2xl  text-center lg:max-w-4xl">
                    <h1 className="max-w-2xl text-balance text-4xl font-headline sm:text-5xl md:text-6xl xl:text-7xl mx-auto">
                        Turn Your Restaurant Into a Brand.
                    </h1>
                    <p className="mt-8 text-balance text-lg text-muted-foreground">
                        The big restaurants keep growing — small restaurants stay stuck because they don’t “qualify” for the tools big companies offer. At Tableturnerr, we build your website, your presence, and your brand so you do qualify — then we connect you to Owner.com and waive your setup fee so you can finally scale.
                    </p>

                    <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="h-12 rounded-full pl-5 pr-3 text-base">
                            <Link target="_blank" href="https://appt.link/Tableturnerr/Free-Demo">
                                <span className="text-nowrap">Get Started Now</span>
                                <ChevronRight className="ml-1" />
                            </Link>
                        </Button>
                        <Button
                            key={2}
                            asChild
                            size="lg"
                            variant="ghost"
                            className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                            <button onClick={() => scrollToSection('partner-benefits-section')}>
                                <span className="text-nowrap">Why Us?</span>
                            </button>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const scrollToSection = (section_name: string) => {
    document.getElementById(section_name)?.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


const menuItems = [
    { name: 'What We Do', scroll_to: 'what-we-do-section' },
    { name: 'Why Us?', scroll_to: 'partner-benefits-section' },
    { name: 'Owner Case Study', scroll_to: 'owner-testimonials-section' },
    { name: 'Qualify', scroll_to: 'qualification-section' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])


    return (
        <header data-state={menuState ? 'active' : 'inactive'} className="group fixed z-50 w-full px-4 pt-2">
            <nav
                className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                <div
                    className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                    <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
                        </button>

                        <div className="hidden lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => scrollToSection(item.scroll_to)}
                                            className="text-muted-foreground hover:text-primary block duration-150">
                                            <span>{item.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                        <div className="lg:hidden">
                            <ul className="space-y-6 text-base">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => scrollToSection(item.scroll_to)}
                                            className="text-muted-foreground hover:text-primary block duration-150">
                                            <span>{item.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                            <Button
                                asChild
                                variant="outline"
                                size="sm">
                                <Link target="_blank" href="https://appt.link/Tableturnerr/Free-Demo">
                                    <span>Let's Talk</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="sm">
                                <Link target="_blank" href="https://appt.link/Tableturnerr/Free-Demo">
                                    <span>Ready For Owner</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

// logo moved to shared component at src/components/ui/logo.tsx
