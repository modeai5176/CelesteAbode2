import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface KickerProps {
  children: ReactNode;
  className?: string;
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <div
      className={cn(
        "inline-block px-4 py-2 bg-primary/15 text-primary border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 hover:bg-primary/20 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
