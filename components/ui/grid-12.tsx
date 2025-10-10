import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface Grid12Props {
  children: ReactNode
  className?: string
  gap?: "sm" | "md" | "lg" | "xl"
}

export function Grid12({ children, className, gap = "md" }: Grid12Props) {
  const gaps = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12"
  }

  return (
    <div className={cn(
      "grid grid-cols-12",
      gaps[gap],
      className
    )}>
      {children}
    </div>
  )
}









