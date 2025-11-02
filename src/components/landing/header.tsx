import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Logo = () => (
  <Link href="/" className="font-headline text-2xl font-bold text-primary">
    Tableturnerr
  </Link>
);

const NavLinks = ({ className }: { className?: string }) => (
  <nav className={className}>
    <Link href="#what-we-do" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">What We Do</Link>
    <Link href="#design-work" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Design Work</Link>
    <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
    <Link href="#owner-com" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Owner.com</Link>
    <Link href="#qualification" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Qualification</Link>
  </nav>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        
        <div className="md:hidden flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] flex flex-col">
              <div className="mb-8">
                <Logo />
              </div>
              <NavLinks className="flex flex-col items-start gap-6" />
              <Button className="mt-auto">Get Started</Button>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-center space-x-2 md:justify-center">
            <div className="md:hidden">
              <Logo />
            </div>
            <NavLinks className="hidden md:flex items-center gap-6" />
        </div>

        <div className="hidden flex-1 items-center justify-end md:flex">
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
