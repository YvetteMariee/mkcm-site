import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      {(title || subtitle) && (
        <div className="mb-10 max-w-3xl space-y-3">
          {subtitle && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold text-brand-900 sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
