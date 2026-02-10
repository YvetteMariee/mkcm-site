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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 via-transparent to-transparent" />
      <div className="absolute -right-20 top-6 h-52 w-52 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">MKCM</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80">{subtitle}</p>
          <Link
            href={ctaHref}
            className="mt-7 inline-flex rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e97312]"
          >
            {ctaLabel}
          </Link>
        </div>

        <Image
          src="/illustrations/services-hero.svg"
          alt="Illustration consulting IT"
          width={520}
          height={380}
          className="mx-auto w-full max-w-md"
        />
      </div>
    </section>
  );
}
