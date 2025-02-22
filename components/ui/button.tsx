import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "lib/utils";
import * as React from "react";

const buttonVariants = cva(
  "disabled:opacity-70 flex justify-center items-center rounded-md font-medium transition-all duration-300 text-sm text-white max-w-fit",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90",
        destructive: "bg-red-700 hover:bg-red-700/90",
        success: "bg-emerald-500 text-white hover:bg-emerald-500/90",
        outline:
          "border border-input text-primary bg-background hover:bg-primary hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        secondary: "text-primary bg-white",
        ghost: "bg-transparent",
      },
      size: {
        default: "p-3 px-6",
        sm: "py-2 px-2",
        lg: "px-6 py-4",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
