import Link from "next/link";

type CtaProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CTA({
  title,
  description,
  buttonLabel = "Discutons de votre projet",
  buttonHref = "mailto:contact@mkcm-consulting.com",
}: CtaProps) {
  return (
    <div className="rounded-3xl bg-brand-900 px-8 py-10 text-white shadow-lg">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
            Contact rapide
          </p>
          <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
          <p className="max-w-xl text-sm text-brand-100 sm:text-base">
            {description}
          </p>
        </div>
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
