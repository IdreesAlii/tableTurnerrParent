import Link from 'next/link';
import { Logo } from '@/components/ui/logo'

export default function FooterSection() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="font-headline text-2xl font-bold">
              <Logo />
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">Turning tables, keeping profits.</p>
          </div>
          <div className="md:col-span-2">
            <div>
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="#what-we-do" className="text-sm text-muted-foreground hover:text-primary">What We Do</Link></li>
                <li><Link href="#design-work" className="text-sm text-muted-foreground hover:text-primary">Design Work</Link></li>
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#qualification" className="text-sm text-muted-foreground hover:text-primary">Qualification</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">&copy; {new Date().getFullYear()} Tableturnerr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
