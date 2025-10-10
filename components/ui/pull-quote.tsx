import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface PullQuoteProps {
  children: ReactNode
  className?: string
  variant?: "centered" | "side-column"
  author?: string
}

export function PullQuote({ children, className, variant = "centered", author }: PullQuoteProps) {
  if (variant === "centered") {
    return (
      <blockquote className={cn(
        "text-center my-12 p-8 border-l-4 border-primary bg-muted/30 rounded-r-lg",
        className
      )}>
        <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
        <p className="text-2xl font-medium text-foreground mb-4 italic">
          "{children}"
        </p>
        {author && (
          <cite className="text-muted-foreground">— {author}</cite>
        )}
      </blockquote>
    )
  }

  return (
    <blockquote className={cn(
      "my-8 p-6 border-l-4 border-primary bg-muted/30 rounded-r-lg",
      className
    )}>
      <Quote className="w-6 h-6 text-primary mb-3" />
      <p className="text-lg font-medium text-foreground mb-3 italic">
        "{children}"
      </p>
      {author && (
        <cite className="text-sm text-muted-foreground">— {author}</cite>
      )}
    </blockquote>
  )
}









