import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Danish',
    title: 'Grill Shack',
    text: "Amazing work amazing people!! Definitely my go to 🌊🔥",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    name: 'Restaurant owner',
    title: 'Miss Mat Cafe',
    text: "🙌🙌 amazing team",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    name: 'Restaurant owner',
    title: 'Texbbq',
    text: "Great communication and work from the team",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  },
  {
    name: 'Restaurant owner',
    title: 'Qadeer Coffee',
    text: "Very professional team!! 🙌🏽🙌🏽🩵🩵 great working with you",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-4'),
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
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <section className="py-20 md:py-24 bg-secondary/50">
      <div className="container">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Loved by Restaurants Everywhere</h2>
      </div>
      <div className="relative mt-12 w-full overflow-hidden">
        <div
          className="flex w-max animate-marquee-slow [hover]:[animation-play-state:paused]"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              className="mx-4"
            />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/50 to-transparent" />
      </div>
    </section>
  );
}
