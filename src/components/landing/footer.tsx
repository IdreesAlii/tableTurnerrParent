import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="font-headline text-2xl font-bold">
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="38" viewBox="0 0 43 38" fill="none" className="w-auto h-7 text-foreground">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.34942 2.36898L4.69883 4.73796H9.74991H14.8007L17.1415 2.36898L19.4823 0H9.74103H0L2.34942 2.36898ZM20.4703 4.54317L15.9656 9.08661L15.9774 20.0073L15.9892 30.9283L19.3909 34.4642L22.7923 38L26.1762 34.591L29.5604 31.1823L29.4917 21.7709L29.423 12.3595L26.4179 14.898C24.7652 16.2941 23.3541 17.4978 23.2823 17.5731C23.1581 17.7031 24.1929 17.5052 25.1767 17.2106C25.6021 17.0832 25.634 17.4623 25.634 22.6424V28.2109L24.2188 29.6944L22.8038 31.1776L21.7471 30.0002L20.6906 28.8226L20.6799 19.8689L20.6692 10.9155L23.7435 7.82658L26.8177 4.73796H32.5681H38.3184L40.6592 2.36898L43 0H33.9875H24.9753L20.4703 4.54317Z" fill="currentColor"/>
    </svg>
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo />
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
