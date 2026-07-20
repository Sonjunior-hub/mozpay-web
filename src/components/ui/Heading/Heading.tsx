import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface HeadingProps {
    title: ReactNode;
    subtitle?: ReactNode;
    align?: 'left' | 'center';
}

export default function Heading({
  title,
  subtitle,
  align = 'center',
}: HeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center"? "text-center": "text-left")}>
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}