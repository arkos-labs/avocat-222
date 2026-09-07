import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "outline-white"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0f172a] text-white hover:bg-[#1e293b] active:bg-[#0f172a] focus-visible:ring-[#0f172a]",
  secondary:
    "bg-[#f1f5f9] text-[#0f172a] hover:bg-[#e2e8f0] active:bg-[#cbd5e1] border border-[#e2e8f0] focus-visible:ring-[#64748b]",
  danger:
    "bg-[#991b1b] text-white hover:bg-[#7f1d1d] active:bg-[#991b1b] focus-visible:ring-[#991b1b] shadow-sm",
  outline:
    "border-2 border-[#0f172a] text-[#0f172a] bg-transparent hover:bg-[#0f172a] hover:text-white focus-visible:ring-[#0f172a]",
  "outline-white":
    "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0f172a] focus-visible:ring-white",
  ghost:
    "bg-transparent text-[#0f172a] hover:bg-[#f1f5f9] active:bg-[#e2e8f0] focus-visible:ring-[#64748b]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-1.5 rounded-md",
  md: "text-base px-5 py-2.5 rounded-lg",
  lg: "text-lg px-8 py-3.5 rounded-lg",
  icon: "p-2 rounded-md",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap cursor-pointer",
          // Variant & Size
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
