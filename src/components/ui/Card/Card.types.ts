import type { HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cardVariants } from './cardVariants';

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}