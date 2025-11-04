import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tick } from '@/components/icons/tick';
import { Cross } from '@/components/icons/cross';
import { ShinyButton } from "@/components/ui/shiny-button";

const qualifications = {
  mustHaves: [
    "You are an independent restaurant (not a major chain).",
    "You have a strong desire to increase direct online orders.",
    "You value great design and customer experience.",
    "You are open to a long-term partnership for growth.",
  ],
  dealBreakers: [
    "You are primarily a ghost kitchen with no physical location.",
    "You are looking for a quick, one-off project.",
    "You rely 100% on third-party delivery apps and don't want to change.",
  ],
};

export default function QualificationCriteriaSection() {
  return (
    <section id="qualification" className="py-14 md:py-18 sm:py-18 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-widest">Are You A Good Fit?</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">Qualification Criteria</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're selective about our partners to ensure we can deliver amazing results. Here's what we look for.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Tick className="h-8 w-8 text-green-500" />
                Who Owner Works With
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {qualifications.mustHaves.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Tick className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Cross className="h-8 w-8 text-red-500" />
                This Might Not Be For You If...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {qualifications.dealBreakers.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Cross className="h-5 w-5 text-red-500 mr-3 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center items-center flex flex-col">
            <p className="text-lg text-muted-foreground max-w-2xl"><span className='font-bold'>In Short</span>, We make you big and perfect enough to fit under Tableturnerr's Qualification then we get you FREE onboarding (its $970 without us)</p>
            <ShinyButton className="mt-4">Let's Talk</ShinyButton>
        </div>
      </div>
    </section>
  );
}
