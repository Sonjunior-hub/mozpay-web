import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-xl',
    'font-medium',
    'transition-all',
    'duration-200',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-blue-600 text-white hover:bg-blue-700',

        secondary:
          'border border-slate-300 bg-white hover:bg-slate-100',

        ghost:
          'hover:bg-slate-100',

        danger:
          'bg-red-600 text-white hover:bg-red-700',
      },

      size: {
        sm: 'h-9 px-3',

        md: 'h-11 px-5',

        lg: 'h-12 px-7',
      },

      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      variant: 'primary',

      size: 'md',
    },
  },
);