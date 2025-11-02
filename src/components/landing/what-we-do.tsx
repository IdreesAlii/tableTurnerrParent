import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brush, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: 'Stunning Web Design',
    description: "We craft beautiful, modern websites that capture your restaurant's unique brand and atmosphere, optimized for all devices.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Direct Ordering Systems',
    description: 'Stop paying high commissions. We integrate a seamless, commission-free ordering system directly into your website.',
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: 'Digital Marketing',
    description: 'From social media management to local SEO, we help you reach more hungry customers in your area.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-widest">What We Do</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">Full-Service Digital Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide everything you need to thrive online, from initial design to ongoing marketing, all tailored for the restaurant industry.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader>
                {service.icon}
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
