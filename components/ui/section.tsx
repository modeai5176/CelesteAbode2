import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  intro?: {
    kicker?: string;
    title: string;
    lead?: string;
  };
}

export function Section({ children, className, intro }: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="max-w-screen-xl mx-auto px-6">
        {intro && (
          <div className="text-center mb-12">
            {intro.kicker && (
              <div className="inline-block px-4 py-2 bg-primary/15 text-primary border border-primary/20 rounded-full text-sm font-medium mb-6">
                {intro.kicker}
              </div>
            )}
            <h1 className="heading-bold text-primary mb-6">
              {intro.title}
            </h1>
            {intro.lead && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {intro.lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
