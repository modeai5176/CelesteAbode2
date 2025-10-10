import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StatItem {
  label: string
  value?: string
  description?: string
}

interface StatListProps {
  items: StatItem[]
  className?: string
}

export function StatList({ items, className }: StatListProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-3 gap-8 py-12",
      className
    )}>
      {items.map((item, index) => (
        <div key={index} className="text-center">
          {item.value && (
            <div className="text-3xl font-semibold text-primary mb-2">
              {item.value}
            </div>
          )}
          <div className="text-lg font-semibold text-foreground mb-2">
            {item.label}
          </div>
          {item.description && (
            <p className="text-muted-foreground text-sm">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
