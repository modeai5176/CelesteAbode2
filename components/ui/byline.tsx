import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BylineProps {
  children: ReactNode
  className?: string
}

export function Byline({ children, className }: BylineProps) {
  return (
    <p className={cn(
      "text-sm font-medium text-secondary uppercase tracking-wide mb-2",
      className
    )}>
      {children}
    </p>
  )
}









