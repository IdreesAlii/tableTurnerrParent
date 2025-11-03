
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatOwnerDoes() {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">What Owner.com Does For You</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Owner.com provides a suite of tools to help you manage and grow your restaurant.
      </p>
      {/* Placeholder for the radial orbital timeline */}
      <div className="flex justify-center items-center h-64 bg-gray-200 rounded-lg">
        <p className="text-gray-500">Radial Orbital Timeline Placeholder</p>
      </div>
    </section>
  );
}
