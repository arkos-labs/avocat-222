import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-6xl px-6 md:px-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "background" | "primary" | "accent-light";
}

export function Section({
  children,
  className,
  background = "white",
  ...props
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    background: "bg-[#f8fafc]",
    primary: "bg-[#0f172a] text-white",
    "accent-light": "bg-[#fee2e2]",
  };

  return (
    <section
      className={cn("py-16 md:py-24", bgClasses[background], className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  eyebrow?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
  eyebrow,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#991b1b]">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight md:text-4xl",
          light ? "text-white" : "text-[#0f172a]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            align === "center" ? "mx-auto max-w-3xl" : "",
            light ? "text-[#94a3b8]" : "text-[#64748b]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
