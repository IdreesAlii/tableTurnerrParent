import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutOwner() {
  const ownerImage = PlaceHolderImages.find(img => img.id === 'about-owner');

  return (
    <section id="owner-com" className="py-20 md:py-24 bg-secondary/50">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 w-full md:h-[400px] order-2 md:order-1">
          {ownerImage && (
            <Image
              src={ownerImage.imageUrl}
              alt={ownerImage.description}
              data-ai-hint={ownerImage.imageHint}
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg w-full h-full"
            />
          )}
        </div>
        <div className="order-1 md:order-2">
          <p className="font-headline text-sm font-semibold uppercase text-accent tracking-widest">Powered by the Best</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">We've Partnered with Owner.com</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            To give you the best-in-class technology, we build your website on the Owner.com platform. This means you get a powerful, all-in-one solution designed specifically for restaurants, without the enterprise price tag.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="https://owner.com" target="_blank" rel="noopener noreferrer">
              Learn More About Owner.com
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
