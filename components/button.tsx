import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md select-none font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-zinc-950",
  {
    variants: {
      variant: {
        primary:
          "bg-zinc-100 text-zinc-900 active:bg-zinc-200 md:[@media(hover:hover)]:hover:bg-zinc-200",
        secondary:
          "bg-zinc-800 text-zinc-100 active:bg-zinc-700 md:[@media(hover:hover)]:hover:bg-700",
        transparent:
          "bg-transparent text-zinc-400 active:bg-zinc-900 active:text-zinc-100 md:[@media(hover:hover)]:hover:bg-zinc-900 md:[@media(hover:hover)]:hover:text-zinc-100",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
