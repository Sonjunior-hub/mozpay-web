import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/cn';

import { buttonVariants } from './buttonVariants';
import type { ButtonProps } from './Button.types';

export default function Button({
  children,
  variant,
  size,
  loading = false,
  fullWidth,
  leftIcon,
  rightIcon,
  className,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
}