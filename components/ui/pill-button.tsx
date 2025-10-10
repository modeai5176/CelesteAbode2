import { ButtonHTMLAttributes, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const baseClasses = "rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
    
    const variants = {
      primary: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg",
      ghost: "bg-transparent hover:bg-muted text-foreground hover:text-primary",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    }
    
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

PillButton.displayName = "PillButton"

export { PillButton }
