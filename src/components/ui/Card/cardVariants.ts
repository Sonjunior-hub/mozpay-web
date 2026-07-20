import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  [
    'rounded-2xl',
    'border',
    'border-slate-200',
    'bg-white',
    'shadow-sm',
    'transition-shadow',
    'duration-200',
  ],
  {
    variants: {
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },

      hover: {
        true: 'hover:shadow-md',
      },
    },

    defaultVariants: {
      padding: 'md',
    },
  },
);