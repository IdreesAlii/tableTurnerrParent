"use client";
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState, useEffect } from "react";

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
  avatarHint?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null;
  }

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border",
        // Make card darker in light mode, keep subtle in dark mode
        "[background-image:linear-gradient(to_bottom,hsl(var(--muted)_/_1),hsl(var(--muted)_/_0.4))]",
        "dark:[background-image:linear-gradient(to_bottom,hsl(var(--muted)_/_0.20),hsl(var(--muted)_/_0.08))]",
        // More visible borders in light mode
        "border-border/70 dark:border-border/30",
        "p-4 text-start sm:p-6",
        // Stronger hover: deeper bg, subtle lift (ring only on keyboard focus)
        "hover:[background-image:linear-gradient(to_bottom,hsl(var(--primary)_/_0.1),hsl(var(--muted)_/_0.38))]",
        "dark:hover:[background-image:linear-gradient(to_bottom,hsl(var(--muted)_/_0.32),hsl(var(--muted)_/_0.18))]",
        // Increase border opacity on hover for clearer outline
        "hover:border-border dark:hover:border-border/40",
        // Keep an accessible focus ring without adding boldness on hover
        "focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "hover:-translate-y-0.5 hover:scale-[1.01]",
        "w-[350px] shrink-0",
        "transition-colors transition-transform duration-300 will-change-transform",
        className
      )}
    >
      <p className="sm:text-md mt-4 text-sm text-muted-foreground flex-grow">
        "{text}"
      </p>
      <div className="flex items-center gap-3 mt-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} data-ai-hint={author.avatarHint} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>
    </Card>
  )
}
