import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

export default function AboutTableturnerr() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-tableturnerr');

  return (
    <section id="about" className="py-20 md:py-24 bg-secondary/50">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-widest">About Tableturnerr</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">Your Partner in Digital Growth</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our mission is simple: to empower local restaurants with the digital tools they need to compete and win. We believe in direct relationships, fair pricing, and beautiful design.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
              <span><strong>No Commissions, Ever:</strong> We help you build a business that you own, not one that rents customers from delivery apps.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
              <span><strong>Restaurant-Focused:</strong> We only work with restaurants. We understand your challenges and speak your language.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
              <span><strong>Partnership Approach:</strong> Your success is our success. We're in this with you for the long haul.</span>
            </li>
          </ul>
        </div>
        <div className="relative h-80 w-full md:h-[400px]">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
