import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const works = [
  { imageId: 'design-1', title: 'The Modern Bistro', category: 'Web Design' },
  { imageId: 'design-2', title: 'Sushify App', category: 'Mobile App' },
  { imageId: 'design-3', title: 'Artisan Cafe Menu', category: 'Branding' },
  { imageId: 'design-4', title: 'Gourmet Burger Shots', category: 'Photography' },
];

export default function DesignWork() {
  const workImages = works.map(work => ({
    ...work,
    image: PlaceHolderImages.find(img => img.id === work.imageId),
  }));

  return (
    <section id="design-work" className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-widest">Our Work</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">Designs That Drive Business</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just make things look good; we create digital experiences that convert visitors into loyal customers.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {workImages.map((work, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-80 w-full">
                {work.image && (
                  <Image
                    src={work.image.imageUrl}
                    alt={work.title}
                    data-ai-hint={work.image.imageHint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="font-headline text-lg font-semibold">{work.title}</h3>
                <p className="text-sm text-muted-foreground">{work.category}</p>
                <Link href="#" className="text-sm font-semibold text-primary flex items-center mt-2 group/link">
                  View Project <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
