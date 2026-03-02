import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-sans",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors duration-300",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-colors duration-300",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-300",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors duration-300",
        ghost:
          "hover:bg-accent/10 hover:text-accent-foreground transition-colors duration-300",
        link:
          "text-primary underline-offset-4 hover:underline transition-colors duration-300",
        gold:
          "bg-gold text-accent-foreground shadow-elegant hover:bg-gold-dark transition-colors duration-300",
        "gold-outline":
          "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-accent-foreground transition-colors duration-300",
        luxury:
          "bg-primary text-primary-foreground tracking-widest uppercase text-xs font-semibold hover:bg-primary/85 transition-colors duration-300",
        pandora:
          "bg-pandora text-pandora-foreground shadow hover:bg-pandora/85 transition-colors duration-300",
        "hero-light":
          "bg-card/15 text-primary-foreground border border-card/30 backdrop-blur-sm hover:bg-card/25 transition-colors duration-300",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
