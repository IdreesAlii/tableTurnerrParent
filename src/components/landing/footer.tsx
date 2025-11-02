import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="font-headline text-2xl font-bold">
    Tableturnerr
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-2 text-sm">Turning tables, keeping profits.</p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="#what-we-do" className="text-sm text-muted-foreground hover:text-primary">What We Do</Link></li>
                <li><Link href="#design-work" className="text-sm text-muted-foreground hover:text-primary">Design Work</Link></li>
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#qualification" className="text-sm text-muted-foreground hover:text-primary">Qualification</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Tableturnerr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
