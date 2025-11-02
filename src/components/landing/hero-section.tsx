import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter max-w-4xl mx-auto">
          We Turn Tables, You Keep The Profit.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Tableturnerr is a digital agency that partners with restaurants to create stunning online presences that attract more customers and drive direct orders.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            Get Your Free Proposal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            See Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
