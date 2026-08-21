import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  required,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={htmlFor} className="text-xs tracking-[0.14em] text-brown uppercase">
        {label}
        {required ? <span className="text-terracotta"> *</span> : null}
      </Label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function FormNote() {
  return (
    <p className="text-xs leading-relaxed text-muted-foreground">
      Submitting sends us your details so we can get back to you personally. Nothing is charged
      online — every booking is confirmed by conversation first.
    </p>
  );
}
