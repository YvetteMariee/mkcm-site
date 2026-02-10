import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PageHero({
  title,
  subtitle,
  ctaLabel = "Parler à un expert",
  ctaHref = "/nous",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/30 via-[#2b3f8f]/25 to-transparent" />
      <div className="absolute -right-20 top-6 h-52 w-52 rounded-full bg-[#7c4dff]/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#26e0ff]">MKCM • TECH</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80">{subtitle}</p>
          <Link
            href={ctaHref}
            className="mt-7 inline-flex rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5f7eff]"
          >
            {ctaLabel}
          </Link>
        </div>

        <Image
          src="/tech/network-grid.svg"
          alt="Visuel technologique"
          width={560}
          height={360}
          className="mx-auto w-full max-w-md rounded-2xl border border-white/10"
        />
      </div>
    </section>
  );
}
