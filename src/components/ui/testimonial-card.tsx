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
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "w-[350px] shrink-0",
        "transition-colors duration-300",
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
