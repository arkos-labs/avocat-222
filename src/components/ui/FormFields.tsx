"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// ─── Input ─────────────────────────────────────────────────────────────────────

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[#0f172a]"
          >
            {label}
            {props.required && (
              <span className="ml-1 text-[#991b1b]" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "w-full rounded-md border px-4 py-2.5 text-sm text-[#0f172a] transition-all duration-150",
            "placeholder:text-[#94a3b8]",
            "focus:outline-none focus:ring-2 focus:ring-[#0f172a] focus:ring-offset-1",
            error
              ? "border-[#991b1b] bg-[#fff5f5] focus:ring-[#991b1b]"
              : "border-[#e2e8f0] bg-white hover:border-[#94a3b8]",
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="text-xs text-[#64748b]">{hint}</p>
        )}
        {error && (
          <p id={`${inputId}-error`} role="alert" className="text-xs text-[#991b1b]">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

// ─── Textarea ──────────────────────────────────────────────────────────────────

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-[#0f172a]"
          >
            {label}
            {props.required && (
              <span className="ml-1 text-[#991b1b]" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={cn(
            "w-full rounded-md border px-4 py-2.5 text-sm text-[#0f172a] transition-all duration-150 resize-vertical min-h-[120px]",
            "placeholder:text-[#94a3b8]",
            "focus:outline-none focus:ring-2 focus:ring-[#0f172a] focus:ring-offset-1",
            error
              ? "border-[#991b1b] bg-[#fff5f5] focus:ring-[#991b1b]"
              : "border-[#e2e8f0] bg-white hover:border-[#94a3b8]",
            className
          )}
          {...props}
        />
        {hint && !error && <p className="text-xs text-[#64748b]">{hint}</p>}
        {error && (
          <p id={`${textareaId}-error`} role="alert" className="text-xs text-[#991b1b]">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// ─── Select ────────────────────────────────────────────────────────────────────

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, id, options, placeholder, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-[#0f172a]"
          >
            {label}
            {props.required && (
              <span className="ml-1 text-[#991b1b]" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : undefined}
          className={cn(
            "w-full rounded-md border px-4 py-2.5 text-sm text-[#0f172a] transition-all duration-150 bg-white appearance-none cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-[#0f172a] focus:ring-offset-1",
            error
              ? "border-[#991b1b] bg-[#fff5f5] focus:ring-[#991b1b]"
              : "border-[#e2e8f0] hover:border-[#94a3b8]",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {hint && !error && <p className="text-xs text-[#64748b]">{hint}</p>}
        {error && (
          <p id={`${selectId}-error`} role="alert" className="text-xs text-[#991b1b]">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Input, Textarea, Select };
