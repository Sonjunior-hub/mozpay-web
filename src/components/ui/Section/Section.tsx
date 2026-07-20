import { cn } from '@/lib/cn';
import type { HTMLAttributes } from 'react';

interface SectionProps
  extends HTMLAttributes<HTMLElement> {}

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}