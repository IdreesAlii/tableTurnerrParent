import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'

function StackedCircularFooter() {
  return (
    <footer className="bg-background pt-12 border-t-[1px] border-muted-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-[#080808] p-8">
            <Link href="/" className="font-headline text-2xl font-bold">
              <Logo />
            </Link>
          </div>
          <div id="navigation">
            <ul className="mb-8 flex flex-wrap justify-center gap-6">
              <li><Link href="#what-we-do" className="text-sm text-muted-foreground hover:text-primary">What We Do</Link></li>
              <li><Link href="#design-work" className="text-sm text-muted-foreground hover:text-primary">Design Work</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="#qualification" className="text-sm text-muted-foreground hover:text-primary">Qualification</Link></li>
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
          <div className="w-full py-5 border-t-[1px] border-muted-foreground/10">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 TableTurnerr, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }