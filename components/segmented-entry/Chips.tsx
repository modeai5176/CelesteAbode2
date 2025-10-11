"use client"

import { cn } from "@/lib/utils"

interface ChipProps {
  children: React.ReactNode
  variant?: "solid" | "outline" | "muted"
  selected?: boolean
  onClick?: () => void
  className?: string
  "aria-pressed"?: boolean
}

export function Chip({ 
  children, 
  variant = "outline", 
  selected = false, 
  onClick, 
  className,
  "aria-pressed": ariaPressed,
  ...props 
}: ChipProps) {
  const baseClasses = "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
  
  const variantClasses = {
    solid: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: selected 
      ? "border-2 border-primary bg-primary/10 text-primary" 
      : "border border-border hover:border-primary/50 hover:bg-primary/5",
    muted: selected 
      ? "bg-muted text-foreground" 
      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      aria-pressed={ariaPressed ?? selected}
      {...props}
    >
      {children}
    </button>
  )
}

interface ChipGroupProps {
  children: React.ReactNode
  className?: string
  label?: string
}

export function ChipGroup({ children, className, label }: ChipGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label={label}>
      {children}
    </div>
  )
}
