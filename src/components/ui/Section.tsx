import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6">
        <div className="flex flex-col gap-3">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</span>
          ) : null}
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h1>
          {description ? <p className="max-w-2xl text-base text-slate-600">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
