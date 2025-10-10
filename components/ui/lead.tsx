import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface LeadProps {
  children: ReactNode
  className?: string
}

export function Lead({ children, className }: LeadProps) {
  return (
    <p className={cn(
      "text-xl leading-relaxed text-muted-foreground",
      className
    )}>
      {children}
    </p>
  )
}









