import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Owner, The Cozy Corner',
    text: "Tableturnerr transformed our online presence. Our direct bookings have skyrocketed, and we're less reliant on third-party apps.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    name: 'Mike R.',
    title: 'Chef, La Trattoria',
    text: "The new website is not only beautiful but also incredibly functional. Our customers love the easy ordering system.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    name: 'Chen W.',
    title: 'Manager, Golden Dragon',
    text: "I was skeptical at first, but the results speak for themselves. We've seen a 40% increase in online orders.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  },
  {
    name: 'Isabella F.',
    title: 'Founder, The Green Bowl',
    text: "Working with them was a breeze. They understood our brand and delivered a product that exceeded our expectations.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-4'),
  },
  {
    name: 'David K.',
    title: 'Owner, Burger Barn',
    text: "Our social media engagement has never been better. Tableturnerr's strategies are pure gold.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-5'),
  },
];

const TestimonialCard = ({ name, title, text, image, className }: { name: string; title: string; text: string; image?: any; className?: string }) => (
  <Card className={cn("w-[350px] shrink-0", className)}>
    <CardContent className="p-6 flex flex-col items-start text-left h-full">
      <p className="text-muted-foreground italic flex-grow">"{text}"</p>
      <div className="mt-4 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image?.imageUrl} alt={name} data-ai-hint={image?.imageHint} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialsMarquee() {
  const allTestimonials = [...testimonials, ...testimonials];
  return (
    <section className="py-20 md:py-24 bg-secondary/50">
      <div className="container">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Loved by Restaurants Everywhere</h2>
      </div>
      <div className="relative mt-12 w-full overflow-hidden">
        <div className="flex animate-marquee-slow [hover]:[animation-play-state:paused]">
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`first-set-${index}`} {...testimonial} className="mx-4" />
          ))}
        </div>
         <div className="absolute top-0 flex animate-marquee-slow-2 [hover]:[animation-play-state:paused]">
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`second-set-${index}`} {...testimonial} className="mx-4" />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/50 to-transparent" />
      </div>
    </section>
  );
}
