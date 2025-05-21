import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-indigo-600 text-black shadow-xs hover:bg-indigo-700 focus-visible:ring-indigo-300 dark:focus-visible:ring-indigo-500 dark:bg-indigo-500",

        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-blue-600 text-white shadow-lg hover:shadow-blue-500/40 hover:brightness-110 transition-all duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-blue-400/60 outline-none",
        frosted:
          "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md hover:brightness-110 hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-cyan-400/50",

        fancy:
          "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md hover:brightness-110 transition-transform hover:scale-105",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        xl: "h-16 px-12 py-2 has-[>svg]:px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
