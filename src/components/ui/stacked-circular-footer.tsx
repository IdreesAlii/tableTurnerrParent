"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'

const scrollToSection = (section_name: string) => {
  document.getElementById(section_name)?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function StackedCircularFooter() {
  return (
    <footer className="bg-background pt-12 border-t-[1px] dark:border-muted-foreground/10 border-muted-foreground/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="mb-8 rounded-full bg-[#0B0B0B]/5 dark:bg-[#0B0B0B] p-8 border border-muted-foreground/15 dark:border-muted-foreground/5">
              <Logo />
            </div>
          </Link>
          <div id="navigation">
            <ul className="mb-8 flex flex-wrap justify-center gap-6">
              <li><button onClick={() => scrollToSection("what-we-do-section")} className="text-sm text-muted-foreground hover:text-primary underline-animate">What We Do</button></li>
              <li><button onClick={() => scrollToSection("partner-benefits-section")} className="text-sm text-muted-foreground hover:text-primary underline-animate">Why Us?</button></li>
              <li><button onClick={() => scrollToSection("owner-testimonials-section")} className="text-sm text-muted-foreground hover:text-primary underline-animate">Owner Case Study</button></li>
              <li><button onClick={() => scrollToSection("qualification-section")} className="text-sm text-muted-foreground hover:text-primary underline-animate">Qualification</button></li>
            </ul>
          </div>
          <div className="mb-8 flex space-x-4">
            <Link href="https://www.instagram.com/tableturnerr/">
              <Button variant="outline" className="rounded-full">
                <span className="text-sm text-muted-foreground">Instagram</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/company/tableturnerr">
              <Button variant="outline" className="rounded-full">
                <span className="text-sm text-muted-foreground">LinkedIn</span>
              </Button>
            </Link>
          </div>
          <div className="w-full py-5 border-t-[1px] border-muted-foreground/20 dark:border-muted-foreground/10">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 <Link href="/" className="underline-animate hover:text-primary">TableTurnerr</Link>, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }