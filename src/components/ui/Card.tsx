import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "ghost";
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variantClasses = {
  default:
    "bg-white border border-[#e2e8f0] shadow-[0_1px_3px_0_rgba(15,23,42,0.08)] hover:shadow-[0_10px_25px_-5px_rgba(15,23,42,0.12)] transition-shadow duration-300",
  elevated:
    "bg-white shadow-[0_4px_6px_-1px_rgba(15,23,42,0.1),0_2px_4px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.15)] transition-shadow duration-300",
  bordered: "bg-white border-2 border-[#e2e8f0] hover:border-[#0f172a] transition-colors duration-200",
  ghost: "bg-transparent",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg",
          variantClasses[variant],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props}>
      {children}
    </div>
  )
);
CardBody.displayName = "CardBody";

export { Card, CardHeader, CardBody };
