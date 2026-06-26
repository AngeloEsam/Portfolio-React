import type { ReactNode, MouseEvent } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  download?: boolean;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  iconRight?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98]',
  secondary:
    'bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98]',
  outline:
    'border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-[1.03] active:scale-[0.98]',
  ghost:
    'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  download,
  external,
  disabled,
  className = '',
  type = 'button',
  icon,
  iconRight = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick as (e: MouseEvent<HTMLAnchorElement>) => void}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {!iconRight && icon}
        {children}
        {iconRight && icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick as (e: MouseEvent<HTMLButtonElement>) => void} disabled={disabled} className={classes}>
      {!iconRight && icon}
      {children}
      {iconRight && icon}
    </button>
  );
}
