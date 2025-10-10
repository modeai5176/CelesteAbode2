import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface EyebrowProps {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn(
      "text-sm font-medium text-muted-foreground mb-2",
      className
    )}>
      {children}
    </div>
  )
}









