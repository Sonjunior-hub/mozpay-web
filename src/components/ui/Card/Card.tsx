import { cn } from '@/lib/cn';

import { cardVariants } from './cardVariants';
import type { CardProps } from './Card.types';

export default function Card({
  className,
  padding,
  hover,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          padding,
          hover,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}