import { AuroraProvider } from '@/components/ui/aurora-provider';
import { Tick } from '@/components/icons/tick';
import { Star } from '@/components/icons/star';
import Image from 'next/image';

export default function AboutOwnerSection() {
  return (
    <section id="owner-com" className="py-14 md:py-18 sm:py-18 bg-background">
      <div className="container px-4 grid md:grid-cols-2 gap-12 items-stretch">
        <div className="relative w-full order-2 md:order-1">
          <Image
            src="/Owner_Mobile_App.webp"
            alt="Owner.com mobile app"
            fill
            className="object-cover rounded-lg shadow-lg w-full h-full"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-widest">About Owner.com</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">When you’re ready, plug into the full Owner.com system.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Owner.com is a leading digital platform for restaurants, valued at $1 billion after a recent $120 million Series C funding round (<a className='underline-animate font-medium text-white/90' href='https://www.bloomberg.com/news/articles/2025-05-13/restaurant-tech-startup-owner-com-hits-1-billion-valuation'>Bloomberg</a>). As a restaurant owner, you compete daily with large chains that have spent millions of dollars building their websites, loyalty apps and marketing funnels. Owner.com levels that field.
          </p>

          <div id='partner-benefits-section' className="mt-8 bg-muted dark:bg-muted/20 p-6 rounded-lg border border-border dark:border-border/50">
            <h3 className="text-xl font-bold text-primary mb-4">Partner Benefit for You (via Tableturnerr)</h3>
            <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <AuroraProvider>
                        <span className="aurora-text"><strong>Initial Setup Fee:</strong> <span className="line-through decoration-white/40">$970</span> (waived/$0 for partners)</span>
                    </AuroraProvider>
                </li>
              <li className="flex items-start">
                <Tick className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Monthly Fee:</strong> $500 per location</span>
              </li>
              <li className="flex items-start">
                <Tick className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Per-Order Fee:</strong> 5%, paid by guest — not the restaurant</span>
              </li>
              <li className="flex items-start">
                <Tick className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Contract:</strong> Month-to-month, no cancellation fees</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
              <h3 className="text-xl font-bold text-white mb-2">Why this matters:</h3>
              <p className="text-lg text-muted-foreground">
                You avoid the high fees of marketplace apps, you get a full stack platform, and you pay predictable pricing.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}
